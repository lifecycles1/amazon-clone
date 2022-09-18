/* eslint-disable import/no-anonymous-default-export */
import { buffer } from "micro";
import * as admin from "firebase-admin";

// secure a connection to firebase from the backend
const serviceAccount = require("../../../permissions.json");
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

// establish connection to stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

export default async (req, res) => {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const payload = buf.toString();
    const signature = req.headers["stripe-signature"];
    let event;
    //verify that the EVENT posted came from stripe
    try {
      event = stripe.webhooks.constructEvent(
        payload,
        signature,
        endpointSecret
      );
    } catch (err) {
      console.log(`Webhook signature verification failed.`, err.message);
      return res.sendStatus(400);
    }

    //handle the event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      //handle successful event attachment (store ordered items in firebase)
      const handleAttachment = async () => {
        return app
          .firestore()
          .collection("users")
          .doc(session.metadata.email)
          .collection("orders")
          .doc(session.id)
          .set({
            amount: session.amount_total / 100,
            amount_shipping: session.total_details.amount_shipping / 100,
            images: JSON.parse(session.metadata.images),
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
          })
          .then(() => {
            res.status(200);
            console.log(
              `SUCCESS: Order ${session.id} has been added to the DB`
            );
          })
          .catch((err) =>
            res.status(400).send(`Webhook Error: ${err.message}`)
          );
      };
      await handleAttachment();
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

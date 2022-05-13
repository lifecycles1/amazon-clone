import React from "react";
import Footer1 from "../../components/Footer1";
import Footer2 from "../../components/Footer2";
import Header from "../../components/Header";
import Product from "../../components/Product";

function productid1({ product }) {
  return (
    <div>
      <Header />

      <main>
        <div className="">
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
          />
        </div>
      </main>

      <footer>
        <Footer1 />
        <Footer2 />
      </footer>
    </div>
  );
}

export default productid1;

export async function getStaticPaths() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    paths: products.map((product) => {
      const productId = product.id.toString();

      return {
        params: {
          productId,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const productId = params.productId;
  const results = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  ).then((res) => res.json());
  return {
    props: {
      product: results,
    },
  };
}

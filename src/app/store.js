import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../features/counter/basketSlice";

export default configureStore({
  reducer: {
    basket: basketReducer,
  },
});

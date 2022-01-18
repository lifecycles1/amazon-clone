import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      //[...state.items] retains the previous items that have been already added, while adding new items to the array
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      //searches into this state.items snapshot.id and matches with the
      //action.payload coming .id which we have destructured while dispatching the reducer
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );

      //creating a mutable copy of the array
      let newBasket = [...state.items];

      //if it has found a match then the index variable should be bigger than 0
      //then we can perform an action to remove it, or else console.warn that there is no match found
      if (index >= 0) {
        //removing item
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id}) as its not in the basket.`
        );
      }
      //assigning the global store state to the new basket which has the item removed
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

//Selectors - This is how we will pull information from the Global store slice

export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;

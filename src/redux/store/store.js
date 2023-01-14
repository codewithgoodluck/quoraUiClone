import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/user/usersSlices";

const store = configureStore({
  reducer: {
    users:userReducer,
  },
});

export default store;




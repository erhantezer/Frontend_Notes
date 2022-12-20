import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import newReducer from "../features/newSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newReducer,
  },
  //   devTools: true=default/false,
  // Redux state grafik olarak görmemizi sağlanan GUI
  //   devTools: process.env.NODE_ENV !== "production",
});

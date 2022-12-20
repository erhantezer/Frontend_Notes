import { createSlice } from "@reduxjs/toolkit";

const initilaState = {
  user: "",
};

//? createSlice, Redux state lojiğini kisa yoldan tanimlamak icin kullanilan bir metotdur.
//? slice ismi, state'lerin baslangic degerleri ve reducer'lar key-value yapisi seklinde tanımlar.
//? reducer, state'i degistiren fonksiyonlarin yaninda otomatik olarak action type'larin tanimlanmasini da saglar.

const authSlice = createSlice({
  name: "auth",
  initialState: initilaState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = "";
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;

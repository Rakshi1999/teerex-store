import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import productSlice from "./product-slice";
import cartSlice from "./cart-slice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from "redux-persist";

const reducers = combineReducers({
  productSlice,
  cartSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whilelist: ["productSlice", "cartSlice"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const webStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistedWebStore = persistStore(webStore);

export { webStore, persistedWebStore };

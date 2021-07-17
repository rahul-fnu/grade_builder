// ./store/store
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { combineReducers } from 'redux'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window === "undefined" ? createNoopStorage() : createWebStorage();

import saver from "./user_input/reducer";

//COMBINING ALL REDUCERS

const rootReducer = combineReducers({
  saver,
})

const makeStore = ({ isServer }) => {
  if (isServer) {
    //If it's on server side, create a store
    return configureStore({
      reducer: rootReducer,
    })
  } else {
    //If it's on client side, create a store which will persist
    // const storage = storage.default

    const persistConfig = {
      key: 'root',
      version: 1,
      blacklist: [],
      storage,
    }

    const persistedReducer = persistReducer(persistConfig, rootReducer) // Create a new reducer with our existing reducer

    const store = configureStore({
      reducer: persistedReducer,
      middleware: getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    })

    store.__persistor = persistStore(store) // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

    return store
  }
}
// Export the wrapper & wrap the pages/_app.js with this wrapper only

export const wrapper = createWrapper(makeStore)

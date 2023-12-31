import storage from 'redux-persist/lib/storage';
import { configureStore } from "@reduxjs/toolkit";
import {  contactsReducer } from "./contactsSlice";
import { filterReduser } from "./filterSlice";
import { persistStore, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, persistReducer } from 'redux-persist'
import { authReducer } from "./authSlice";
import { themeReducer } from './themeSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
};

export const store = configureStore({
  reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
        filter: filterReduser,
        theme: persistReducer(themePersistConfig, themeReducer)
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)
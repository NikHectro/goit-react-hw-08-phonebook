import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { itemsReducer, filterReducer } from './slices';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import {  } from './filterSlice';

const rootReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import phoneBookReducer from './reduce';
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   blacklist: ['phoneBookReducer'],
// };
// const phoneBookReducerConfig = {
//   key: 'phoneBookReducer',
//   storage: storage,
//   blacklist: ['filter'],
// };

// const rootReducer = combineReducers({
//   phoneBookReducer: persistReducer(phoneBookReducerConfig, phoneBookReducer),
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//   devTools: process.env.NODE_ENV === 'development',
// });

// export const persistor = persistStore(store);

// // export default store;

// //from (to fix) https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data
// // base: https://github.com/rt2zz/redux-persist

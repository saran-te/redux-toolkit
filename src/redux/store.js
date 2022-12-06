import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import multiplierReducer from './multiplier/multiplierSlice';
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    multiplier: multiplierReducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

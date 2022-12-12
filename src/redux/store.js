import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import multiplierReducer from './multiplier/multiplierSlice';
import userReducer from './user/userSlice'
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    multiplier: multiplierReducer,
    user: userReducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

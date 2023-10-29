import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

// Create your Redux store using Redux Toolkit
const store = configureStore({
  reducer: rootReducer,
  // Optionally, you can add middleware here if needed
  // middleware: [...],
});

export default store;

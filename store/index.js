import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./reducers/counterSlice";
import { proudctApi } from '@/services/apiSlices/productsSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [proudctApi.reducerPath]: proudctApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(proudctApi.middleware)
});

setupListeners(store.dispatch);
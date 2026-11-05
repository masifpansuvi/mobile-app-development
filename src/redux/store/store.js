import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import productReducer from '../slice/productSlice'
// import userReducer from '../slice/userSlice'
// import cardReducer from '../slice/cartSlice'
import transactionReducer from '../slice/transactionSlice'

import { createAsyncStorage } from '@react-native-async-storage/async-storage';
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

const storage = createAsyncStorage('redux-persist')

const rootReducer = combineReducers({
    transaction: transactionReducer
})

const persistConfig= {
    key: 'root',
    storage: storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);

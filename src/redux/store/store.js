// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import authReducer from '../slice/loginSlice';
// import todosReducer from '../slice/loginSlice';
// import { createAsyncStorage } from '@react-native-async-storage/async-storage';
// import {
//   persistStore,
//   persistReducer
// } from 'redux-persist';

// const storage = createAsyncStorage('redux-persist');

// const rootReducer = combineReducers({
//     todos: todosReducer,
//     auth: authReducer
// })

// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['auth', 'todos']
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//     reducer: persistedReducer
// });

// export const persistor = persistStore(store)

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productReducer from '../slice/productSlice'
import userReducer from '../slice/userSlice'
import cardReducer from '../slice/cartSlice'

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
    product: productReducer,
    users: userReducer,
    card: cardReducer
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

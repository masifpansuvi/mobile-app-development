import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from '../slice/loginSlice';
import todosReducer from '../slice/loginSlice';
import { createAsyncStorage } from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer
} from 'redux-persist';

const storage = createAsyncStorage('redux-persist');

const rootReducer = combineReducers({
    todos: todosReducer,
    auth: authReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'todos']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store)

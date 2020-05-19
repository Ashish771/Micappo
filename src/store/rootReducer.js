import { combineReducers } from 'redux';
import { persistReducer, purgeStoredState } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { device } from './device/device.reducers';

const storage = AsyncStorage;

const persistConfig = {
    key: 'root',
    storage
}

const deviceConfig = {
    key: 'device',
    storage,
    whitelist: [],
    blacklist: ['isConnected', 'isInternetReachable']
}

const rootReducer = combineReducers({
    device: persistReducer(deviceConfig, device),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const purgeStore = () => {
    purgeStoredState(persistConfig);
};

export default persistedReducer;

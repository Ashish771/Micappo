import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const HEIGHT = Dimensions.get('window').height;
export const WIDTH = Dimensions.get('window').width;

export const getResponsiveHeight = (per) => {
    return ((HEIGHT * per) / 100);
}

export const getResponsiveWidth = (per) => {
    return ((WIDTH * per) / 100);
}

export const statusBarHeight = getStatusBarHeight(true);
// import React, { Component } from 'react';
// import { createAppContainer } from 'react-navigation';
// import switchNavigator from './AppNavigators';

// const App = createAppContainer(switchNavigator);

// export default class Navigator extends Component {
//     render() {
//         return (
//             <App ref={(ref) => { this.navigator = ref; }} />
//         );
//     }
// }


import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { connect } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import { showMessage } from 'react-native-flash-message';
import switchNavigator from './AppNavigators';
import * as deviceActions from '../store/device/device.actions';

const App = createAppContainer(switchNavigator);

class Navigator extends Component {
    componentDidMount() {
        this.unsubscribe = NetInfo.addEventListener(state => {
            this.props.onNetworkConnectionChange(state.isConnected, state.isInternetReachable);
            console.log(state.isConnected);
            console.log(state.isInternetReachable);
            if(state.isConnected == true && state.isInternetReachable == true){
                // showMessage({
                //     message: 'Online.',
                //     type: 'success',
                // });   
            }else if(state.isConnected == true && state.isInternetReachable == false){
                showMessage({
                    message: 'Network not reachable.',
                    type: 'warning',
                });
            }else if(state.isConnected == false && state.isInternetReachable == false){
                showMessage({
                    message: 'You are offline.',
                    type: 'danger',
                });
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <App ref={(ref) => { this.navigator = ref; }} />
        );
    }
}

const mapStateToProps = ({ device }) => ({
    isConnected: device.isConnected,
    isInternetReachable: device.isInternetReachable
});

const mapDispatchToProps = {
    ...deviceActions
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);

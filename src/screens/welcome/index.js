import React, { Component } from 'react';
import { StatusBar, View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Container, Content } from 'native-base';
import connect from './connect';
import styles from './styles';
import globalStyles from '../../constants/globalStyles';
import Colors from '../../constants/colors';

class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Container style={globalStyles.container}>
                <StatusBar
                    barStyle='dark-content'
                    backgroundColor={Colors.Background}
                />
                <SafeAreaView />
                <Content contentContainerStyle={[globalStyles.contentContainer, { flexGrow: 1 }]}>
                    <View style={styles.contentContainer}>
                        <View style={{ flex: 0.6, justifyContent: 'center' }}>
                            <View style={styles.imageContainer}>
                                <Image
                                    source={{ uri: 'data:image/png;base64,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' }}
                                    style={styles.logoImage}
                                    resizeMode='contain'
                                />
                            </View>
                        </View>
                        <View style={{ flex: 0.4, justifyContent: 'center' }}>
                            <View style={styles.content}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={globalStyles.btnContainer}>
                                    <Text style={globalStyles.btnText}>Iniciar sesion</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')} style={styles.footerContainer}>
                                <Text style={styles.footerBtnText}>Crear una cuenta</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default connect(WelcomeScreen);
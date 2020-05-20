import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import { BottomTabBar } from 'react-navigation-tabs';
import { getResponsiveHeight, WIDTH } from '../helper/utils';
import Colors from '../constants/colors';

export default CustomBottomBar = (props) => {
    const width = WIDTH;
    const [offset] = useState(new Animated.ValueXY({ x: 0, y: getResponsiveHeight(15) }));
    const [currentTab, setCurrentTab] = useState(0);

    useEffect(() => {
        if (props.navigation.state.routes[currentTab].index == 0) {
            Animated.timing(offset, {
                toValue: { x: 0, y: 0 },
                duration: 200,
                useNativeDriver: true
            }).start();
        } else {
            Animated.timing(offset, {
                toValue: { x: 0, y: getResponsiveHeight(15) },
                duration: 200,
                useNativeDriver: true
            }).start();
        }
    });

    const animate = (route, index) => {
        setCurrentTab(index);
        props.navigation.navigate(route);
    }

    return (
        <Animated.View
            style={[styles.container, {
                transform: offset.getTranslateTransform()
            }]}
        >
            <BottomTabBar
                {...props}
                onTabPress={({ route }) => {
                    switch (route.key) {
                        case 'Dashboard':
                            animate(route.key, 0)
                            break
                        case 'Document':
                            animate(route.key, 1)
                            break
                        case 'History':
                            animate(route.key, 2)
                            break
                        case 'Reminder':
                            animate(route.key, 3)
                            break
                        case 'About': 
                            animate(route.key, 4)
                    }
                }}
                style={{
                    backgroundColor: 'transparent',
                    height: getResponsiveHeight(7)
                }}
            />
        </Animated.View>
    )
}


const styles = {
    container: {
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.TintColor,
        elevation: 8,
    },
};

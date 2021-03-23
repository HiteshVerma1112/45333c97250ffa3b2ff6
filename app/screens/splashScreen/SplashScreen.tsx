import React, { Component } from 'react'
import { ImageBackground, Text, View, Image } from 'react-native'
import styles from './SplashStyle';
import * as Animatable from 'react-native-animatable';


export interface Props {
    navigation: any;
    id: string;
}

interface S {
    asteroidList: any;
    asteroidData: any
}

interface SS {
    id: any;
}

export default class SplashScreen extends Component<Props, S, SS> {

    componentDidMount() {
        setTimeout(async () => {
            this.props.navigation.replace('StoryListComponent')
        }, 3000);
    }
    renderSplashText = () => {
        return (
            <View>
                <Text style={styles.headingText}>Welcome to</Text>
                <Text style={styles.headingTextForNew}>Test Project</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/splash1.png')}
                    style={styles.bgImg}>
                    <Animatable.View useNativeDriver animation="zoomInDown" duration="1000">
                        {this.renderSplashText()}
                    </Animatable.View>
                </ImageBackground>
            </View>
        )
    }
}

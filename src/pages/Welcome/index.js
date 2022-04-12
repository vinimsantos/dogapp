import React from 'react';
import { View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity 
} from 'react-native';

import logo from '../../assets/logo.png'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Welcome() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
        <Animatable.View delay={600} animation="fadeInLeft" style={styles.logoContainer}>
            <Image
                source={logo}
                style={styles.imageProps}
            />
        </Animatable.View>


        <View style={styles.containerLogo}>
        </View>
        <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>Salve uma vida, Adote!</Text>
            <Text style={styles.text}>Faça o login para começar</Text>

            <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('SignIn')}
            >
            <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
        </Animatable.View>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#D47FE4'
    },
    containerLogo:{
        flex:2,
        maxHeight: 135,
        backgroundColor: '#D47FE4',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize:24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12
    },
    text:{
        color: 'a1a1a1'
    },
    button:{
        position: 'absolute',
        backgroundColor: '#cc3fe6',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom:'15%',
        alignItems:'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    },
    logoContainer:{
        alignSelf: 'center',
        paddingTop: 80
    },
    imageProps: { width: '250px', height: '250px'}
})
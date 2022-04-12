import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable'
import logo from '../../assets/logo.png'

import { useNavigation } from '@react-navigation/native'

export default function SignIn() {
    const navigation = useNavigation();
    
    const butonHander = () => {
        return 
    };
    

    const handler = butonHander();
    
  const [text, onChangeText] = React.useState("");
  
  const [passwordText, onChangePasswordText] = React.useState("");

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Image
                    source={logo}
                    style={styles.imageProps}
                />  
                <Text style={styles.message}>Login</Text>
                     
            <Text style={styles.subtitle}>Insira seus dados para continuar</Text> 
                     
            </Animatable.View>
            

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="Digite um email..."
                    style={styles.input}  
                    onChangeText={onChangeText}
                    value={text}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Sua senha..."
                    style={styles.input}                
                    onChangeText={onChangePasswordText}
                    value={passwordText}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}
                     onPress={() => navigation.navigate('Home')}
                    >Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.registerText}>Cadastro</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFF'
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',

    },
    message:{
        fontSize:28,
        fontWeight: 'bold',
        color: '#000'

    },
    subtitle: {
        fontSize:14,
        paddingTop: 8,
        color: '#000'
    },
    containerForm:{
        background:'#FFF',
        flex:1,
        borderTopLeftRadius:25,
        borderTopLeftRadius:25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize:20,
        marginTop:28,
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button:{
        backgroundColor:'#cc3fe6',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        marginTop:14,
        alignSelf: 'center'
    },
    registerText:{
        color: '#a1a1a1'
    },
    imageProps: { width: '50px', height: '50px', marginBottom: '15px'}

})


import React, { useState } from 'react';
import { View,Text,Button,TextInput,Image,TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

import { auth } from '../../../config/fb'
import { cores, fonts } from '../../styles';
import { styles } from './styles'

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordIsVisible, setPasswordIsVisible] = useState(false);

    const navigation = useNavigation();

    async function createUser() {
        await createUserWithEmailAndPassword(auth, email, password)
        .then(value => {
            Alert.alert('Sucesso', 'Usuário cadastrado!.')
            console.log('Usuário cadastrado com sucesso.\nUID do usuário: ' + value.user.uid)
        })
        .catch(error => {
            console.log(error)
            Alert.alert('Falha', 'Preencha todos os campos corretamente.')
        })
    }

    async function loginUser() {
        await signInWithEmailAndPassword(auth, email, password)
        .then(value => {
            console.log('Usuário logado com sucesso')
            Alert.alert('Logado com sucesso', 'Bem vindo, ' + value.user.email)
            navigation.navigate('Home', {clientId: value.user.uid})
        })
        .catch(error => {
            console.log(error)
            Alert.alert('Erro', 'Falha de autenticação')
        })
    }

    return(
        <View style={styles.container}>
            <Image
                source={require('../../../assets/icon.png')}
                style={styles.imageLogo}
            />
            <TextInput
                value={email}
                onChangeText={value => setEmail(value)}
                style={styles.input}
                placeholder='Email'
                placeholderTextColor={cores.PLACEHOLDER_TEXT_COLOR}
            />
            <View style={styles.containerInputPassword}>
                <TextInput
                    value={password}
                    onChangeText={value => setPassword(value)}
                    style={styles.inputPassword}
                    placeholder='Senha'
                    placeholderTextColor={cores.PLACEHOLDER_TEXT_COLOR}
                    secureTextEntry={!passwordIsVisible}
                />
                <TouchableOpacity 
                onPress={() => setPasswordIsVisible(!passwordIsVisible)}
                >
                    <Feather 
                        name="eye"
                        size={25}
                        color={cores.PLACEHOLDER_TEXT_COLOR}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
            style={styles.containerButtonLogin}
            onPress={loginUser}
            >
                <Text style={styles.textButtonLogin}>ENTRAR</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={createUser}
            >
                <Text style={styles.textRegister}>Criar uma conta</Text>
            </TouchableOpacity>
        </View>
    )
}

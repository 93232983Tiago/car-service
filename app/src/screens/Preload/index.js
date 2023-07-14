import React, { useEffect } from "react";
import { Text, Image } from "react-native";
import { Container, LoadingIcon, Teslapng } from './styles';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import Carlogo from '../../../assets/carrepair.svg'

export default () => {

    const navigation = useNavigation();

    // função usando o asyncstorage para validar o token de acesso
    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token')
            if(token !== null){
                // função timeout para a visualização do preload
                setTimeout(()=>{  
                    
                }, 1000);
            } else {
                setTimeout(() =>{
                    navigation.navigate('SignIn'); //se não houver o token irá para a tela de Login
                }, 1000);
            }
        }
        checkToken();
    }, []);

    return(
        <Container>
            <Carlogo width="50%" height="100" fill="#FFF"/>
            <LoadingIcon size="large" color="#FFF"/>
        </Container>   
    );
}
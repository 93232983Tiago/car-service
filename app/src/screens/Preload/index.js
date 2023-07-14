import React from "react";
import { Text, Image } from "react-native";
import { Container, LoadingIcon, Teslapng } from './styles';

import Carlogo from '../../../assets/carrepair.svg'

export default () => {
    return(
        <Container>
            <Carlogo width="100%" height="150" fill="#FFF"/>
            <LoadingIcon size="large" color="#FFF"/>
        </Container>   
    );
}
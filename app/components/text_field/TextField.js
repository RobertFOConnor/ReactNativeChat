import React from 'react';
import {TextInput} from 'react-native';
import {styles} from "./styles";

export const TextField = ({hint, onChangeText, isPassword}) =>
    <TextInput
        style={styles.textInput}
        placeholder={hint}
        secureTextEntry={isPassword}
        underlineColorAndroid='rgba(0,0,0,0)'
        onChangeText={onChangeText}
    />;
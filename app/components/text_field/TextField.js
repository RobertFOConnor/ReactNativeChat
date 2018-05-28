import React from 'react';
import {TextInput} from 'react-native';
import {styles} from "./styles";

export const TextField = ({testID, hint, onChangeText, isPassword}) =>
    <TextInput
        testID={testID}
        style={styles.textInput}
        placeholder={hint}
        secureTextEntry={isPassword}
        underlineColorAndroid='rgba(0,0,0,0)'
        onChangeText={onChangeText}
    />;
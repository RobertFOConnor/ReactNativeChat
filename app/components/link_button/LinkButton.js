import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import {styles} from "./styles";

export const LinkButton = ({onPress, title}) =>
    <TouchableOpacity onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>;
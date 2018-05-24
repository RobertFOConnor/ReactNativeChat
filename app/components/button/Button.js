import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import {styles} from "./styles";

export const Button = ({onPress, title}) =>
    <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </View>
    </TouchableOpacity>;
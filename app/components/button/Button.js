import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import {styles} from "./styles";

export const Button = ({testID, onPress, title}) =>
    <TouchableOpacity testID={testID} onPress={onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </View>
    </TouchableOpacity>;
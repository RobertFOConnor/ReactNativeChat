import {StyleSheet} from "react-native";
import {colors} from '../../common/colors';

export const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        width: 250,
        height: 40,
        elevation: 2,
        backgroundColor: colors.button,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    buttonText: {
        color: colors.white,
    },
});

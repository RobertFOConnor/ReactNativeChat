import {StyleSheet} from "react-native";
import {colors} from '../../common/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    message: {
        color: colors.primary,
    },
    bubbleContainer: {
        marginVertical: 4,
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderBottomWidth: 8,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        transform: [
            {rotate: '180deg'}
        ],
    },
    bubble: {
        backgroundColor: colors.white,
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    textInputContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        margin: 15,
        right: 0,
    },
    textInput: {
        flex: 6,
        backgroundColor: colors.white,
        paddingHorizontal: 15,
        borderRadius: 20,
        height: 40,
        elevation: 2,
    },
    sendButton: {
        flex: 1,
        marginLeft: 10,
        paddingRight: 3,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        backgroundColor: colors.primary,
        borderRadius: 20,
    },
});

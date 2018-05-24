import {StyleSheet} from "react-native";
import {colors} from '../../common/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
    },
    itemDivider: {
        flex:1,
        height: 1,
        backgroundColor: colors.background,
    },
    itemContainer: {
        flexDirection: 'row',
        marginVertical: 8,
        marginHorizontal: 10,
    },
    itemText: {
        paddingLeft: 15,
        paddingVertical: 10,
        fontSize: 18,
    },
    profilePhoto: {
        backgroundColor: colors.white,
        borderRadius: 25,
        width: 50,
        height: 50,
    },
});

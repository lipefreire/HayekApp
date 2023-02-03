import { StyleSheet } from "react-native";
import { cores, fonts } from "../../styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: cores.BACKGROUND
    },
    imageLogo: {
        width: 150,
        height: 150
    },
    input: {
        borderWidth: 1,
        borderColor: cores.PLACEHOLDER_TEXT_COLOR,
        borderRadius: 7,
        marginTop: 50,
        width: '80%',
        height: 50,
        fontFamily: fonts.REGULAR,
        padding: 10,
        fontSize: 18,
        color: cores.PLACEHOLDER_TEXT_COLOR
    },
    containerInputPassword: {
        width: "80%",
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: cores.PLACEHOLDER_TEXT_COLOR,
        borderRadius: 7,
        flexDirection: 'row',
        marginTop: 20,
        color: '#942cbc'
    },
    inputPassword: {
        flex: 1,
        fontSize: 18,
        color: '#942cbc'
    },
    containerButtonLogin: {
        width: '80%',
        height: 50,
        backgroundColor: cores.PLACEHOLDER_TEXT_COLOR,
        borderRadius: 7,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButtonLogin: {
        color: cores.BACKGROUND,
        fontFamily: fonts.BOLD,
        fontSize: 18
    },
    textRegister: {
        color: cores.PLACEHOLDER_TEXT_COLOR,
        fontSize: 16,
        marginTop: 5,
    },
    emoji: {
        fontSize: 100,
        borderWidth: 1,
        borderColor: '#942cbc',
        borderRadius: 6,
        padding: 10,
        marginVertical: 6,
        backgroundColor: '#fff',
        marginTop: 15
    },
    title: {
        fontFamily: fonts.REGULAR,
        color: cores.PLACEHOLDER_TEXT_COLOR,
        fontSize: 32,
        fontWeight: '700',
    }
})
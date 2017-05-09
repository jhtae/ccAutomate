import { StyleSheet } from 'react-native';

let Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },

    displayContainer: {
        flex: 2,
        backgroundColor: '#193441',
        alignItems: 'center',
        justifyContent: 'center'
    },

    inputContainer: {
        flex: 8,
        paddingLeft: 15,
        paddingTop: 20,
        backgroundColor: '#3E606F',
        paddingRight: 15
    },

    textLabelFields: {
        fontSize: 40,   
        color: 'white'     
    },

    textFields: {
        fontSize:20,
        color: 'white'
    },
    pickerStyle: {
        marginLeft: 20,
        width: 200,
    },
    buttonStyle: {

    }
});

export default Style;
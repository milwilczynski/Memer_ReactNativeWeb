import {StyleSheet} from "react-native";

const topStyles = StyleSheet.create({
    container:{
        marginLeft: '2.5%',
        width: '95%',
        flex: 0.95,
        marginTop: '1.25%',
        height: '100%',
        flexDirection: 'row',

    },
    mainImage:{
        flex: 0.4,
        backgroundColor: 'black',
    },
    restImage:{
        flex: 0.6,
        backgroundColor: 'green',
    },
    restImageRow:{
        flex: 1,
        flexDirection: 'row'
    },
    singleImage:{
        flex: 0.5,
        backgroundColor: 'yellow'
    }
});
export default topStyles;

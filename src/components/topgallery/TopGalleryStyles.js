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
        marginRight: '0.25%',
        zIndex:2
    },
    restImage:{
        flex: 0.6,
    },
    restImageRow:{
        flex: 1,
        flexDirection: 'row',
        zIndex:2
    },
    singleImage:{
        flex: 0.5,
        margin: '0.15%',
        zIndex:2
    },
    splitter:{
        height: '30%',
        width: '100%',
        backgroundColor: '#ffd31d',
        marginTop: '32%',
        zIndex: 1,
        position: 'absolute'
    },
});
export default topStyles;

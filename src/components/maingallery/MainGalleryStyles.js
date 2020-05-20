import {StyleSheet} from "react-native";

const mainStyles = StyleSheet.create({
    container:{
        marginLeft: '15%',
        width: '70%',
        minHeight: '100%',
    },
    titleContainer:{
        flex: 1,
    },
    top:{
        flex: 0.1,
    },
    bottom:{
        flex: 0.9,
        flexDirection: 'row',
    },
    imageContainer:{
        flex: 0.9,
        minHeight: '100%'
    },
    tagsContainer:{
        flex: 0.3,
        flexDirection: 'row',
    },
    tag:{
        flex: 0.25,
        height: '10%',
        margin: '0.8%',
    },


});
export default mainStyles;

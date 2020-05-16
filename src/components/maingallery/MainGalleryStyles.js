import {StyleSheet} from "react-native";

const mainStyles = StyleSheet.create({
    container:{
        marginLeft: '15%',
        width: '70%',
        minHeight: '100%',
    },
    all:{
        height: '100px'
    },
    titleContainer:{
        flex: 1,
    },
    top:{
        flex: 0.5,
    },
    bottom:{
        flex: 5,
        flexDirection: 'row',
    },
    imageContainer:{
        flex: 0.7,
    },
    tagsContainer:{
        flex: 0.3,
        flexDirection: 'row',
    },
    tag:{
        flex: 0.25,
        height: '10%',
        margin: '0.8%',
        backgroundColor: 'orange'
    },

});
export default mainStyles;

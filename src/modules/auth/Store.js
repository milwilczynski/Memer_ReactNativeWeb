import   AsyncStorage   from '@react-native-community/async-storage';

export class Store {


    static _storeData = async(data) =>{
        try {
            await AsyncStorage.setItem('@ItsPropably', data.token);
        } catch (error) {
            console.log(error);
        }
    };
    static _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('@ItsPropably');
            if (value !== null) {
                console.log(value);
            }
        } catch (error) {
            console.log(error);
        }
    };

    static _clearData = async () =>{
        try{
            await AsyncStorage._clearData();
        }catch(error){
            console.log(error);
        }
    }


}

export default Store;

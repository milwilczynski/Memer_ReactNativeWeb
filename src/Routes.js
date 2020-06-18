import * as React from "react";
import {Home} from './screens/Home';
import {Login} from './screens/Login';
import {Register} from './screens/Register'
import Random from "./screens/Random";
import {Router, Switch, Route} from './router';
import {history} from './store/history';
import {UserContext} from "./modules/auth/UserContext";
import {useState, useMemo} from 'react';
import {Menu} from "./components/smart/Menu";
import {StyleSheet, View} from "react-native";
import PrivateRoutes from "./modules/auth/PrivateRoutes";
import {Search} from "./screens/Search";
import {AddPicture} from "./screens/AddPicture";

export const Routes = () => {
    const [user, setUser] = useState('');
    const value = useMemo(() => ({ user, setUser }), [user, setUser]);
    return (
        <Router history={history}>
            <UserContext.Provider value={value}>
                <View style={styles.menu}>
                    <Menu />
                </View>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/register' component={Register}/>
                    <PrivateRoutes exact path='/random' component={Random}/>
                    <PrivateRoutes exact path='/addpicture' component={AddPicture}/>
                    <Route exact path='/search' component={Search}/>
                </Switch>
            </UserContext.Provider>
        </Router>
    );

};

const styles = StyleSheet.create({
    menu: {
        position: 'flex',
        width: '100%',
        zIndex: 1,
        backgroundColor: "green",
        justifyContent: 'center',
        textAlign: 'center'
    },
});
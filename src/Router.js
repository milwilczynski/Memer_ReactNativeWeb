import {useContext} from "react";
import * as React from "react";
import {observer} from "mobx-react-lite";
import {RouterStoreContext} from "./store/RouterStore";
import  {Home}  from './modules/Home';
import  {Login}   from './modules/dumb/Login';
import {Register} from './modules/dumb/Register'
import {Random} from "./modules/dumb/Random";
import {ErrorNoPageFound} from "./modules/errors/ErrorNoPageFound";


export const Router = observer(() => {
    const routerStore = useContext(RouterStoreContext);

    if(routerStore.screen === 'Home') {
        return <Home></Home>;
    }
    else if(routerStore.screen === 'Login') {
        return <Login></Login>;
    }
    else if(routerStore.screen === 'Register') {
        return <Register></Register>;
    }
    else if(routerStore.screen === 'Random'){
        return <Random></Random>;
    }
    else{
        return <ErrorNoPageFound></ErrorNoPageFound>;
    }





});

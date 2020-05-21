import { createContext } from "react";
import { observable } from "mobx";

type Routes = 'Home' | 'Login' | 'Register' | 'Random';


class RouterStore{
    @observable screen: Routes = 'Home' | 'Login' | 'Register' | 'Random';
}

export const RouterStoreContext = createContext(new RouterStore());

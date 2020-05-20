import { createContext } from "react";
import { observable } from "mobx";

type Routes = 'Home' | 'Login' | 'Register' | 'Random';


class RouterStore{
    @observable screen: Routes = 'Home';
}

export const RouterStoreContext = createContext(new RouterStore());

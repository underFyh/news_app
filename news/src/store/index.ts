import {IHomeState} from "@/typing/homeStore";
import {createStore} from 'vuex'
import home from './home/index';

export interface IGlobalState {
    home: IHomeState
}

export default createStore<IGlobalState>({
    // state: {
    // },
    // mutations: {
    // },
    // actions: {
    // },
    // modules: {
    // }
    modules: {
        home
    }

})

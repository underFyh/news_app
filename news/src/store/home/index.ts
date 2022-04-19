import { Module } from 'vuex';
import state from './state';
import actions from './actions';
import mutations from './mutations'
import {IHomeState} from "@/typing/homeStore";
import {IGlobalState} from "@/store";

const homeModule: Module<IHomeState, IGlobalState> = {
    namespaced: true,
    state,
    actions,
    mutations
}


export default homeModule;

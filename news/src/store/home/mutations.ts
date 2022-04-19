import { SET_NEW_LIST, SET_LOADING } from "@/store/home/actionTypes";
import {IHomeState, IReturnData} from "@/typing/homeStore";

export default {
    [SET_LOADING](state:IHomeState, isLoading: boolean) {
        state.newList.isLoading = isLoading;
    },
    [SET_NEW_LIST](state: IHomeState, payload: IReturnData) {
        if (payload.hasMore) {
            state.newList.news = [...state.newList.news, ...payload.data!];
            state.newList.pageNum +=1;
        }
        state.newList.hasMore = payload.hasMore;
        state.newList.isLoading = false;
    }
}

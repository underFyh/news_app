import { SET_NEW_LIST, SET_LOADING, SET_NEWS_TYPE } from "@/store/home/actionTypes";
import {IHomeState, INewsList, IReturnData} from "@/typing/homeStore";
import {INavBarItem} from "@/typing";

export default {
    [SET_LOADING](state:IHomeState, isLoading: boolean) {
        state.newList.isLoading = isLoading;
    },
    [SET_NEW_LIST](state: IHomeState, payload: IReturnData) {
        console.log(payload, 'aaa');
        if (payload.hasMore) {
            state.newList.news = [...state.newList.news, ...payload.data!];
            state.newList.pageNum +=1;
        }
        state.newList.hasMore = payload.hasMore;
        state.newList.isLoading = false;
    },
    [SET_NEWS_TYPE](state: IHomeState, payload: INavBarItem) {
        state.currentType = payload.type;
        state.newList = <INewsList> {
            hasMore: true,
            isLoading: false,
            pageNum: 0,
            count: 10,
            news: []
        }
    }
}

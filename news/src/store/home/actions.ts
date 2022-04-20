import { SET_NEW_LIST, SET_LOADING, SET_NEWS_TYPE } from "@/store/home/actionTypes";
import { Commit } from "vuex";
import {IHomeState, INewsInfo} from "@/typing/homeStore";
import {getNewsList, IPostData} from "@/server";
import {INavBarItem} from "@/typing";


export default {
    [SET_NEW_LIST]({commit, state}: { commit: Commit, state: IHomeState }, options: IPostData) {
        if (state.newList.isLoading) {
            return;
        }
        if (!state.newList.hasMore) {
            return;
        }
        if (state.newList.pageNum) {
            commit(SET_LOADING, true);
        }
        getNewsList<INewsInfo[]>(options).then((data) => {
            commit(SET_NEW_LIST, data);
        }).catch((err) => {
            throw err;
        })
    },
    [SET_NEWS_TYPE]({commit, state}: {commit: Commit, state: IHomeState}, navItem: INavBarItem) {
        commit(SET_NEWS_TYPE, navItem)
    }
}

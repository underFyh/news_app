import { SET_NEW_LIST, SET_LOADING } from "@/store/home/actionTypes";
import { Commit } from "vuex";
import {IHomeState, INewsInfo} from "@/typing/homeStore";
import {getNewsList, IPostData} from "@/server";


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
    }
}

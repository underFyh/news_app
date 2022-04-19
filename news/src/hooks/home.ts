import { Store } from 'vuex'
import { computed, ComputedRef } from 'vue'
import {IGlobalState} from "@/store"
import {IHomeState, INewsInfo} from "@/typing/homeStore";
import {NEWS_TYPE} from "@/typing";
import {SET_NEW_LIST} from "@/store/home/actionTypes";

function useNewsList(store: Store<IGlobalState>) {
    const state: IHomeState = store.state.home;
    const type: NEWS_TYPE = computed(() => state.currentType).value;
    const pageNum: number = computed(() => state.newList.pageNum).value;
    const count: number = computed(() => state.newList.count).value;
    const newsList: ComputedRef<INewsInfo[]> = computed(() => state.newList.news);

    store.dispatch(`home/${SET_NEW_LIST}`, {
        type,
        pageNum,
        count
    })

    return newsList
}

export {
    useNewsList
}

<template>
    <NavBar
        :dataList="barListData"
        @setCurNavType="setCurNavType"
    />
    <div class="home" ref="newListRef">
        <NewsList :newsList="newsList"/>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {Store, useStore} from 'vuex';
import {useNewsList} from '@/hooks/home';
import { useLoadMore } from '@/hooks/index'
import NavBar from '@/components/NavBar/index.vue';
import NewsList from '@/components/NewsList/index.vue'
import {INavBarItem, NEWS_TYPE} from "@/typing";
import {SET_NEWS_TYPE, SET_NEW_LIST} from "@/store/home/actionTypes";

export default defineComponent({
    name: 'Home',
    components: {
        NavBar,
        NewsList
    },
    setup() {
       const barListData: INavBarItem[] = [
           { title: '热点', type: NEWS_TYPE.TOP, index: 0},
           { title: '社会', type: NEWS_TYPE.SHEHUI, index: 1},
           { title: '国内', type: NEWS_TYPE.GUONEI, index: 2},
           { title: '娱乐', type: NEWS_TYPE.YULE, index: 3},
           { title: '体育', type: NEWS_TYPE.TIYU, index: 4},
           { title: '军事', type: NEWS_TYPE.JUNSHI, index: 5},
           { title: '科技', type: NEWS_TYPE.KEJI, index: 6},
           { title: '财经', type: NEWS_TYPE.KEJI, index: 7},
           { title: '时尚', type: NEWS_TYPE.SHISHANG, index: 8}
       ];
       const store: Store<any> = useStore();
       let newsList = useNewsList(store);
       const newListRef = ref<null | HTMLElement>(null);

       const setCurNavType = (v: INavBarItem) => {
           console.log(v, 'home');
           store.dispatch(`home/${SET_NEWS_TYPE}`, v)
           // 获取新结果
           newsList = useNewsList(store)
       }

        const { isLoading, hasMore } = useLoadMore(store, 'home', SET_NEW_LIST, newListRef)
        console.log(isLoading, hasMore);

        return {
           barListData,
           setCurNavType,
           newsList,
           newListRef
       }
    }
});
</script>

<style scoped lang="scss">
.home {
    height: calc(100vh - 74px);
    overflow: scroll;
}
</style>

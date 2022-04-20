<template>
    <div class="home">
        <NavBar
            :dataList="barListData"
            @setCurNavType="setCurNavType"
        />
        <div class="container">
            <router-link to="/">home</router-link>
            <router-link to="/detail">detail</router-link>
            <router-link to="/collection">collection</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {Store, useStore} from 'vuex';
import {useNewsList} from '@/hooks/home';
import NavBar from '@/components/NavBar/index.vue';
import {INavBarItem, NEWS_TYPE} from "@/typing";
import {SET_NEWS_TYPE} from "@/store/home/actionTypes";

export default defineComponent({
    name: 'Home',
    components: {
        NavBar
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
       const newsList = useNewsList(store);
       console.log(newsList);

       const setCurNavType = (v: INavBarItem) => {
           console.log(v, 'home');
           store.dispatch(`home/${SET_NEWS_TYPE}`, v)
       }

       return {
           barListData,
           setCurNavType
       }
    }
});
</script>

<style scoped lang="scss">
.home {
    height: calc(100vh - 44px);
    overflow: scroll;
}
</style>

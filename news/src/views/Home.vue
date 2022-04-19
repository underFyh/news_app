<template>
    <div class="home">
        <div class="container">
            <router-link to="/">home</router-link>
            <router-link to="/detail">detail</router-link>
            <router-link to="/collection">collection</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue';
import { useStore, Store } from 'vuex';
import { useNewsList } from '@/hooks/home';

export default defineComponent({
    name: 'Home',
    setup() {
       const store: Store<any> = useStore();
       const newsList = useNewsList(store);
        console.log(newsList);

    }
});
</script>

<style scoped lang="scss">
.home {
    height: calc(100vh - 44px);
    overflow: scroll;
}
</style>

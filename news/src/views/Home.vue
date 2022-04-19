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
import {getNewsList} from "@/server";
import {defineComponent, onMounted} from 'vue';
import {NEWS_TYPE} from "@/typing";

export default defineComponent({
    name: 'Home',
    setup() {
        onMounted(async () => {
            const data = await getNewsList({
                type: NEWS_TYPE.TIYU,
                pageNum: 1,
                count: 5
            })
            console.log(data);
        })
    }
});
</script>

<style scoped lang="scss">
.home {
    height: calc(100vh - 44px);
    overflow: scroll;
}
</style>

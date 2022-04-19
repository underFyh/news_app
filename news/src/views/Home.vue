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
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'Home',
    setup() {

    }
});
</script>

<style scoped lang="scss">
.home {
    height: calc(100vh - 44px);
    overflow: scroll;
}
</style>

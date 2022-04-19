<template>
    <div class="wrapper">
        <Nav/>
        <router-view v-slot="{ Component }">
            <keep-alive include="Home">
                <component :is="Component"/>
            </keep-alive>
        </router-view>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Nav from '@/components/Nav/index.vue';
export default defineComponent({
    name: 'App',
    components: {
        Nav
    }
})
</script>
<style lang="scss">
#app {
    height: 100%;
    .wrapper {
        height: 100%;
    }
}
</style>

<template>
    <div class="detail">
       detail
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Nav from '../components/Nav/index.vue';

export default defineComponent({
    name: 'Detail',
    components: {
        Nav
    },
    setup() {

    }
});
</script>

<style scoped lang="scss">
.detail {
    height: calc(100vh - 44px);
    overflow: scroll;
}
</style>

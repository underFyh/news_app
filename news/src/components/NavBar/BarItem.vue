<template>
    <div
        class="nav-item"
        @click="setCurNavType(itemData)"
    >
        <span :class="{ active: curIdx === itemData.index }">{{ itemData.title }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType} from 'vue';
import {INavBarItem} from "@/typing";
export default defineComponent({
    name: "BarItem",
    props: {
        itemData: Object as PropType<INavBarItem>,
        curIdx: Number as PropType<number>
    },
    setup(props, { emit }) {
        const setCurNavType = (item: INavBarItem) => {
            emit('setCurNavType', item)
        }
        return {
            setCurNavType
        }
    }
})
</script>

<style lang="scss" scoped>
.nav-item{
    text-align: center;
    .active {
        color: royalblue;
    }
}

</style>

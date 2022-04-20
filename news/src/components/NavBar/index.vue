<template>
    <div class="nav">
        <div class="sub">
            <BarItem
                v-for="(item, index) of dataList"
                :key="index"
                :itemData="item"
                :curIdx="curIdx"
                @setCurNavType="setCurNavType"
            >
            </BarItem>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs} from 'vue';
import {INavBarItem} from "@/typing";
import BarItem from "./BarItem.vue";
export default defineComponent({
    name: 'NavBar',
    props: {
        dataList: Array as PropType<INavBarItem[]>
    },
    components: {
        BarItem
    },
    setup(props, { emit }) {
        const state = reactive({
            curIdx: 0
        })
        const setCurNavType = (v: INavBarItem) => {
            state.curIdx = v.index;
            emit('setCurNavType', v)
        }

        return {
            setCurNavType,
            ...toRefs(state)
        }
    }
})
</script>

<style lang="scss" scoped>
.nav {
    height: 100%;
    height: 30px;
    line-height: 30px;
    background-color: #eee;
    overflow: scroll;
    .sub {
        width: 150%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
}
</style>

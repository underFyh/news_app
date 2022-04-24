<template>
    <div class="item item0">
        <h3>{{ item.title }}</h3>
        <div class="pic">no img</div>
        <p class="bottom">
            <span>{{ item.author_name }}</span>
            <span>{{ item.date }}</span>
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import {INewsInfo} from "@/typing/homeStore";
export default defineComponent({
    name: "item0",
    props: {
        item: Object as PropType<INewsInfo>
    }
})
</script>

<style lang="scss" scoped>
.item {
    height: 150px;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .pic {
        height: 80px;
        text-align: center;
        line-height: 80px;
        color: rgba(0, 0, 0, .1);
        background-color: #eee;
    }
}

</style>

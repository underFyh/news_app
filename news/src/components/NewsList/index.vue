<template>
    <div class="news-list">
        <div
            v-for="(item, index) of newsList"
            :key="index"
            class="news-item"
        >
            <Item0
                v-if="!item.thumbnail_pic_s"
                :item="item"
            />
            <Item1
                v-else-if="!item.thumbnail_pic_s02"
                :item="item"
            />
            <Item2
                v-else-if="!item.thumbnail_pic_s03"
                :item="item"
            />
            <Item3
                v-else
                :item="item"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Item0 from './item/item0.vue';
import Item1 from './item/item1.vue';
import Item2 from './item/item2.vue';
import Item3 from './item/item3.vue';
import {INewsInfo} from "@/typing/homeStore";

export default defineComponent({
    name: "NewsList",
    props: {
        newsList: Array as PropType<INewsInfo[]>
    },
    components: {
        Item0,
        Item1,
        Item2,
        Item3,
    }
})
</script>

<style lang="scss" scoped>

</style>

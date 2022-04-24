<template>
    <div class="item item2">
        <h3>{{ item.title }}</h3>
        <div class="pic">
            <img :src="item.thumbnail_pic_s" alt="" ref="img1Ref">
            <img :src="item.thumbnail_pic_s02" alt="" ref="img2Ref">
        </div>
        <p class="bottom">
            <span>{{ item.author_name }}</span>
            <span>{{ item.date }}</span>
        </p>
    </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, PropType, ref} from 'vue';
import {INewsInfo} from "@/typing/homeStore";
import {useImgLoad} from "@/hooks";

export default defineComponent({
    name: "item2",
    props: {
        item: Object as PropType<INewsInfo>
    },
    setup() {
        const img1Ref = ref(null)
        const img2Ref = ref(null)
        onMounted(() => {
            useImgLoad([img1Ref, img2Ref])
        })
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
        display: flex;
        align-items: center;

        img {
            border-radius: 6px;
            width: 150px;
            opacity: 0;
            margin-right: 55px;
        }
    }
}
</style>

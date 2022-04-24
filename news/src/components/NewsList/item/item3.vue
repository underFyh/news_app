<template>
    <div class="item item3">
        <h3>{{ item.title }}</h3>
        <div class="pic">
            <img class="img3" :src="item.thumbnail_pic_s"  ref="img1Ref">
            <img class="img3" :src="item.thumbnail_pic_s02"  ref="img2Ref">
            <img class="img3" :src="item.thumbnail_pic_s03"  ref="img3Ref">
        </div>
        <p class="bottom">
            <span>{{ item.author_name }}</span>
            <span>{{ item.date }}</span>
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, onMounted, ref } from 'vue';
import {INewsInfo} from "@/typing/homeStore";
import {useImgLoad} from "@/hooks";
export default defineComponent({
    name: "item3",
    props: {
        item: Object as PropType<INewsInfo>
    },
    setup() {
        const img1Ref = ref<null | HTMLElement>(null)
        const img2Ref = ref<null | HTMLElement>(null)
        const img3Ref = ref<null | HTMLElement>(null)
        onMounted(() => {
            useImgLoad([img1Ref, img2Ref, img3Ref])
        })

        return{
            img1Ref,
            img2Ref,
            img3Ref
        }
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
        justify-content: space-around;
        img {
            width: 110px;
            border-radius: 6px;
            opacity: 0;
            transition: opacity 1s linear;
        }
    }
}
</style>

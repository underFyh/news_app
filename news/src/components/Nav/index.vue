<template>
    <div class="nav">
        <div class="left">
            <span
                v-if="navInfo.left"
                :class="['iconfont', navInfo.left.iconName]"
                @click="handleLeft(navInfo.left.iconPath)"
            >
        </span>
        </div>
        <h3 class="title">{{ navInfo.title }}</h3>
        <div class="right">
            <span
                v-if="navInfo.right"
                :class="['iconfont', navInfo.right.iconName]"
                class="right"
                @click="handleRight(navInfo.right.iconPath)"
            />
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, reactive, watch} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {INavItem} from "@/typing/index.ts";
import {useRouteInfo} from "@/hooks";

export default defineComponent({
    name: 'Nav',
    setup() {
        let navData: Array<INavItem> = [
            {
                name: 'Home',
                title: '首页',
                right: {
                    iconName: 'icon-31wode',
                    iconPath: '/detail'
                }
            },
            {
                name: 'Detail',
                title: '详情',
                left: {
                    iconName: 'icon-fanhui',
                    iconPath: '/detail'
                },
                right: {
                    iconName: 'icon-shoucang',
                    iconPath: '/detail'
                }
            },
            {
                name: 'Collection',
                title: '我的',
                left: {
                    iconName: 'icon-fanhui',
                    iconPath: '/detail'
                }
            }
        ];
        const route = useRoute();
        const router = useRouter();
        // let navInfo:INavItem =  reactive(useRouteInfo(route.name, navData));
        let navInfo:INavItem = reactive({
            name: 'Home',
            title: '首页',
            right: {
                iconName: 'icon-31wode',
                iconPath: '/detail'
            }
        })

        const handleRight = (path: string) => {
            console.log(path);
            router.push(path);
        }
        const handleLeft = (path: string) => {
            console.log(path);
            router.go(-1);
        }

        watch(() => {
            return route.name
        }, (routeName) => {
            // 直接设置为什么会失效?  navInfo = useRouteInfo(routeName, navData)
            navInfo = Object.assign(navInfo, reactive(useRouteInfo(routeName, navData)));
        })

        return {
            navInfo,
            handleRight,
            handleLeft
        }
    }
})
</script>

<style lang="scss" scoped>
.nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    height: 44px;
    background-color: royalblue;
    box-sizing: border-box;
    color: #fff;
    .left, .right {
        width: 20px;
    }

    span {
        font-size: 16px;
    }

    .title {
        font-size: 20px;
    }
}

</style>

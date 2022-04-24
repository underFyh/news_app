import {INavItem, NEWS_TYPE} from "@/typing";
import {computed, onMounted, Ref} from 'vue';
import {Store} from "vuex";
import {IGlobalState} from "@/store";
import {IHomeState} from "@/typing/homeStore";

// 根据路由名称判断当前导航选项
function useRouteInfo(routeName: string | undefined | null | symbol, NavData: Array<INavItem>): INavItem {
    let res = {} as INavItem;
     NavData.forEach((item) => {
        if (item.name === routeName) {
            res = item;
        }
    })
    return res;
}

// 图片淡入效果
function useImgLoad(imgRefs: Ref<null | HTMLElement>[]) {
    imgRefs.map((imgRef) => {
        const oImg = imgRef.value;
       if (oImg) {
           oImg!.onload = function () {
               oImg!.style.opacity = '1'
           }
       }
    })
}

// 下来加载功能
function useLoadMore(
    store: Store<IGlobalState>,
    module: string,
    actionType: string,
    element: Ref<null | HTMLElement>
) {
    let el: HTMLElement;
    let state: IHomeState;

    switch (module) {
        case 'home':
            state = store.state.home as IHomeState;
            break;
        default:
            break;
    }

    onMounted(() => {
        // 可能为null所以我们断言它一定是一个dom
        el = element.value as HTMLElement;
        el.addEventListener('scroll', _loadMore, false);
    })

    function _loadMore(): void {
        const listHeight: number = el.clientHeight;
        const scrollHeight: number = el.scrollHeight;
        const scrollTop: number = el.scrollTop;

        const type: NEWS_TYPE = computed(() => state.currentType).value;
        const pageNum: number = computed(() => state.newList.pageNum).value;
        const count: number = computed(() => state.newList.count).value;
        if (listHeight + scrollTop >= scrollHeight - 30) {
            store.dispatch(`${module}/${actionType}`, {
                type,
                pageNum,
                count
            })
        }
    }

    return {
        isLoading: computed(() => state.newList.isLoading),
        hasMore: computed(() => state.newList.hasMore)
    }

}

export {
    useRouteInfo,
    useImgLoad,
    useLoadMore
}



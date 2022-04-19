import {NEWS_TYPE} from "@/typing";


export default {
    currentType : NEWS_TYPE.TOP,
    newList: {
        hasMore: true,
        isLoading: false,
        pageNum:0,
        count: 0,
        news: []
    }
}

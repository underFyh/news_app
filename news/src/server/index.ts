import axios from '../utils/http';
import {NEWS_TYPE} from "@/typing";

export interface IPostData {
    type: NEWS_TYPE;
    pageNum: number;
    count: number;
}

// 获取新闻数据
function getNewsList<T>(options: IPostData) {
    const {type, pageNum, count} = options;
    return axios.post<T, T>('api/news_list', {type, pageNum, count})
        .then((data) => {
            return data
        })
        .catch((err) => {
            throw new Error('Requers failed' + err);
        })
}


export {
    getNewsList
}

import {NEWS_TYPE} from "@/typing/common";

// home store 新闻数据类型
export interface INewsList {
    hasMore: boolean;
    isLoading: boolean;
    pageNum: number;
    count: number;
    news: INewsInfo[];
}

// 数据返回类型
export interface INewsInfo {
    uniquekey: string;
    title: string;
    date: string;
    category: string;
    author_name: string;
    url: string;
    is_content: string;
    thumbnail_pic_s?: string;
    thumbnail_pic_s02?: string;
    thumbnail_pic_s03?: string;
}

// homeState 数据类型
export interface IHomeState {
    currentType: NEWS_TYPE;
    newList: INewsList
}

// 请求接口数据类型
export interface IPostNewsData {
    type: NEWS_TYPE;
    pageNum: number;
    count: number;
}


// 接口请求返回的数据结果
export interface IReturnData {
    hasMore: boolean;
    data: INewsInfo[] | null;
}

import {NEWS_TYPE} from "@/typing/common";

export interface INewsList {
    hasMore: boolean;
    isLoading: boolean;
    pageNum: number;
    count: number;
    news: INewsInfo[];
}

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

export interface IHomeState {
    currentType: NEWS_TYPE;
    newList: INewsList
}

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

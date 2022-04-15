import 'egg';

interface IHttpGetParams {
    url: string;
    data: any;
    success: (data: any) => void;
    fail: (err: any) => void;
}

interface IGetNewsListParams {
    type: string;
    pageNum: number;
    count: number;
}

interface IPageData<T> {
    data: Array<T> | null;
    hasMore: boolean
}

interface INewsData {
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

declare module 'egg' {
    IHttpGetParams
    IGetNewsListParams
    IPageData
}

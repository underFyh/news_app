import {IPageData} from "../typings";

function formatParams(data: any, appkey: string): string {
    // data必须是一个对象
    if (typeof data !== 'object') {
        throw new Error('data must a object');
    }

    let paramStr: string = '?';
    for (let key in data) {
        paramStr += `${key}=${data[key]}&`;
    }

    return appkey ? paramStr + 'key=' + appkey : paramStr.slice(0, -1);
}

function getPageData<T>(data: Array<T>, pageNum: number, count: number ): IPageData<T> {
    let res: IPageData<T> = {
        data: [],
        hasMore: true
    }

    if (data.length <= count) {
        res.data?.concat(data);
        res.hasMore = false;
    } else {
        const totalPage: number = Math.ceil(data.length / count);
        if (pageNum >= totalPage) {
            res.data = null;
            res.hasMore = false;
        } else {
            res.data = data.splice(pageNum * count, count);
            res.hasMore = true;
        }
    }

    return res;
}

export {
    formatParams,
    getPageData
}

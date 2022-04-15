import {Service} from 'egg';
import {IHttpGetParams, INewsData} from "../../typings";
import { getPageData } from "../../lib/utils";


export default class Api extends Service {
    // 请求数据和操作数据库的地方
    public async getNewsList({type, pageNum, count}) {
        const {ctx} = this;
        const pageNumber: number = pageNum || 0;
        const pageCount: number = count || 10;

        return ctx.httpGet(<IHttpGetParams>{
            url: ctx.app.config.API.GET_NEW_LIST,
            data: {type: type || 'top'},
            success(data) {
                return getPageData<INewsData>(data, pageNumber, pageCount)
            },
            fail(err) {
                throw new Error('Request fail' + err)
            }
        })
    }
}

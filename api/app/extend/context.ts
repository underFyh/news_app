import {IHttpGetParams, INewsData, IPageData} from "../../typings";
import { formatParams } from "../../lib/utils";
const nodeFetch = require('node-fetch');

module.exports = {
    httpGet(option: IHttpGetParams): Promise<IPageData<INewsData>> {
        const { url, data, success, fail } = option;
        return nodeFetch(url + formatParams(data, this.app.config.APP_KEY))
            .then(res => res.json())
            .then((data:any) => success(data.result.data))
            .catch((err) => fail(err));
    }
}

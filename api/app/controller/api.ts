import { Controller } from 'egg';
import {IGetNewsListParams} from "../../typings";

export default class ApiController extends Controller {
  public async getNewsList() {
    const { ctx } = this;

    // 前端post请求体的时候会传入 type, pageNum, count
    const { type, pageNum, count }:IGetNewsListParams = ctx.request.body;

    ctx.body = await ctx.service.api.getNewsList({ type, pageNum, count })
  }
}

// 配置插件的地方
import {EggPlugin} from 'egg';

const plugin: EggPlugin = {
    // 跨域配置
    cors: {
        enable: true,
        package: 'egg-cors'
    }
};

export default plugin;

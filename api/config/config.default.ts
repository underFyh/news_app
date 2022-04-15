import {EggAppConfig, EggAppInfo, PowerPartial} from 'egg';

// ? 跨域设置 导出cors核心
// exports.cors = {
//     origin: '*',
//     allowMethods: 'GET,POST,PUT,DELETE,HEAD,PATCH'
// }

export default (appInfo: EggAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig>;

    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1649984238934_4386';


    // add your egg config in here
    config.middleware = [];

    // add your special config in here
    const bizConfig = {
        sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    };

    // ? 跨域设置
    config.cors = {
        origin: () => '*',
        allowMethods: 'GET,POST,PUT,DELETE,HEAD,PATCH',
        credentials: true, // 跨域拿cookie
    }
    config.security = {
        // csrc攻击默认是true - 但是会影响本地开发所以要关闭
        csrf: {
            enable: false
        }
    }

    // 请求配置
    const userConfig = {
        APP_KEY: '5f2a6f48f30c9ba3ec8df73793458b0f',
        API: {
            GET_NEW_LIST: 'http://v.juhe.cn/toutiao/index'
        }
    }

    // the return config will combines to EggAppConfig
    return {
        ...config,
        ...bizConfig,
        ...userConfig
    };
};

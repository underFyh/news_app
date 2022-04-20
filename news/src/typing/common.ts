// 图标接口
interface IIconData {
    iconName: string;
    iconPath: string;
}

// 导航配置接口
interface INavItem {
    name: string; // 导航名
    title: string; // 标题名
    left?: IIconData;  // 左边icon配置
    right?: IIconData; // 右边icon配置
}

// 枚举分类
enum NEWS_TYPE {
    TOP = 'top',
    SHEHUI = 'shehui',
    GUONEI = 'guonei',
    YULE = 'yule',
    TIYU = 'tiyu',
    JUNSHI = 'junshi',
    KEJI = 'keji',
    CAIJING = 'caijing',
    SHISHANG = 'shishang',
}

// 子导航每项
interface INavBarItem {
    title: string;
    type: NEWS_TYPE;
    index: number;
}


export {
    INavItem,
    NEWS_TYPE,
    INavBarItem
}

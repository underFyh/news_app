interface IIconData {
    iconName: string;
    iconPath: string;
}

interface INavItem {
    name: string; // 导航名
    title: string; // 标题名
    left?: IIconData;  // 左边icon配置
    right?: IIconData; // 右边icon配置
}

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


export {
    INavItem,
    NEWS_TYPE
}

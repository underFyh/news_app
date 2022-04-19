import {INavItem} from "@/typing";

function useRouteInfo(routeName: string | undefined | null | symbol, NavData: Array<INavItem>): INavItem {
    let res = {} as INavItem;
     NavData.forEach((item) => {
        if (item.name === routeName) {
            res = item;
        }
    })
    return res;
}

export { useRouteInfo }



import {JSX} from "react";
import {Icon} from "@/components/ui/Icon/Icon";
import s from "./cart.module.scss";

export const Cart = ():JSX.Element=> {
    return <button className={s.cart_btn}>
        <Icon type="shopBag" height={24} width={24} boxHeight={256} boxWidth={256} classnames={s.icon_cart}/>
    </button>
}
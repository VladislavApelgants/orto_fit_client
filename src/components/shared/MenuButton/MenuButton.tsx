import { Icon } from '@/components/ui/Icon/Icon';
import {JSX} from 'react';
import s from "./mobMenu.module.scss"

export const MenuButton = ():JSX.Element => {

    return (
        <button className={s.button}>
            <Icon type="menu" width={28} height={28} />
        </button>
    );
};

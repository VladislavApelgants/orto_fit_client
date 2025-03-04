import Link from "next/link";
import React, {FC} from "react";

export const SocialBlock:FC = ():React.JSX.Element => {
    return <ul>
        <li><Link href={'/'}>instagram</Link></li>
        <li><Link href={'/'}>youtube</Link></li>
        <li><Link href={'/'}>telegram</Link></li>
        <li><Link href={'/'}>viber</Link></li>
    </ul>
}
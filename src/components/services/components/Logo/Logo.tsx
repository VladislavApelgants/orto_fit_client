import Link from "next/link";
import { FC } from "react";
type LogoTypes = {
  logoClass?: string;
};

export const Logo: FC<LogoTypes> = ({ logoClass }) => {
  return (
    <Link href="/" className={logoClass}>
      MaryOrtoFit
    </Link>
  );
};

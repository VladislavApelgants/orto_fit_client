import { Logo } from "@/components/services/components/Logo/Logo";
import { SocialBlock } from "@/components/services/components/SocialBlock/SocialBlock";
import { Nav } from "../Header/Nav/Nav";
import { Address } from "./Address/Address";
import s from "./footer.module.scss";
import { InfoBlock } from "./InfoBlock/InfoBlock";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footer_wrapper}>
          <Logo logoClass={s.footer_logo} />
          <Nav navList={s.navList} navLink={s.navLink} />
          <SocialBlock listClass={s.social_block} linkClass={s.socialLink} />
          <Address />
        </div>
        <InfoBlock />
      </div>
    </footer>
  );
};

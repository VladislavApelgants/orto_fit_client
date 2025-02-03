import { LangSelector } from "@/components/shared/LangSelector/LangSelector";
import { getTranslate } from "@/tolgee/server";

export const Header = async () => {
  const t = await getTranslate();
  console.log("😎 ~ Header ~  t:", t("header.products"));

  return (
    <header>
      <div className={`container`}>
        <LangSelector />
      </div>
    </header>
  );
};

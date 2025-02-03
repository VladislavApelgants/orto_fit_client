import axios from "axios";
import { config } from "dotenv";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { resolve } from "node:path";
config({
  path: resolve(".env"),
});

const API_URL = process.env.NEXT_PUBLIC_TOLGEE_API_URL || "";
console.log("😎 ~ API_URL:", API_URL);
const API_KEY = process.env.NEXT_PUBLIC_TOLGEE_API_KEY || "";
console.log("😎 ~ API_KEY:", API_KEY);
const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID || "";
console.log("😎 ~ PROJECT_ID:", PROJECT_ID);

const localesInstance = axios.create({
  baseURL: `${API_URL}/v2/projects/${PROJECT_ID}/`,
  headers: {
    "X-API-Key": API_KEY,
  },
});

async function tolgeeReq(path) {
  try {
    return localesInstance.get(path);
  } catch (error) {
    console.log(`tolgeeReq function error ${path}: `, error?.message);
    throw new Error(error);
  }
}

const updateLocales = async () => {
  try {
    let translations = {};
    const languagesRes = await tolgeeReq("languages");
    const namespacesRes = await tolgeeReq("namespaces");

    const languages = languagesRes.data?._embedded.languages.map(
      (lang) => lang.tag
    );
    const namespaces =
      namespacesRes.data?._embedded?.namespaces?.map((ns) => ns.name) ?? [];
    console.log("😎 ~ updateLocales ~ languages:", namespaces);

    for (const lang of languages) {
      const result = await Promise.allSettled(
        namespaces.map(async (ns) => {
          const fetchRes = await tolgeeReq(`translations/${lang}?ns=${ns}`);
          const data = fetchRes.data;
          return { data, ns };
        })
      );
      result.forEach((res) => {
        if (res.status === "fulfilled") {
          translations[lang] = {
            ...translations[lang],
            [res.value?.ns]: {
              ...(res.value.data?.[lang] || {}),
            },
          };
        }
      });
    }

    writeLocales(translations);
  } catch (error) {
    console.log(`updateLocales function error: `, error?.message);
    throw new Error(error);
  }
};

updateLocales()
  .then(() => {
    console.log("Locales successfully updated");
  })
  .catch((e) => {
    console.log("Updating locales failed!");
    console.log(e.message);
  });

function writeLocales(translations) {
  try {
    if (!existsSync(resolve("src", "i18n"))) {
      mkdirSync(resolve("src", "i18n"));
    }
    for (let lang in translations) {
      const currentLang = translations[lang];
      for (let ns in currentLang) {
        const dirPath = resolve("src", "i18n", ns);
        if (!existsSync(dirPath)) {
          mkdirSync(dirPath);
        }
        const path = resolve(dirPath, `${lang}.json`);
        const content = JSON.stringify(currentLang[ns]);
        writeFileSync(path, content, {});
      }
    }
  } catch (error) {
    console.log(`writeLocales function error: `, error?.message);
    throw new Error(error);
  }
}

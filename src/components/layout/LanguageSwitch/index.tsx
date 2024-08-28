"use client";

import { useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";

const COOKIE_NAME = "googtrans";

interface LanguageDescriptor {
  name: string;
  title: string;
  positionY: number;
}

declare global {
  namespace globalThis {
    var __GOOGLE_TRANSLATION_CONFIG__: {
      languages: LanguageDescriptor[];
      defaultLanguage: string;
    };
  }
}

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>();
  const [languageConfig, setLanguageConfig] = useState<any>();

  useEffect(() => {
    const cookies = parseCookies();
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    let languageValue;
    if (existingLanguageCookieValue) {
      const sp = existingLanguageCookieValue.split("/");
      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }

    if (global.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
      languageValue = global.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }
    if (languageValue) {
      setCurrentLanguage(languageValue);
    }
    if (global.__GOOGLE_TRANSLATION_CONFIG__) {
      setLanguageConfig(global.__GOOGLE_TRANSLATION_CONFIG__);
    }
  }, []);

  if (!currentLanguage || !languageConfig) {
    return null;
  }

  const switchLanguage = (lang: string) => () => {
    setCookie(null, COOKIE_NAME, `/auto/${lang}`);
    window.location.reload();
  };

  return (
    <div className="grid p-2 grid-cols-2 gap-2 bg-[#ffffff12] lg:bg-[var(--primary-color)] w-full lg:w-[180px]">
      {languageConfig.languages.map((ld: LanguageDescriptor, i: number) => (
        <div
          key={`l_s_${ld.name}`}
          onClick={switchLanguage(ld.name)}
          className="uppercase p-1 w-full flex justify-center lg:justify-between items-center lg:bg-[var(--bg-header-color)] hover:text-[#f8d540]"
        >
          <span className="block mr-1 text-xs">
            {ld.name.split("-")[1] ? ld.name.split("-")[1] : ld.name}
          </span>
          <div
            className="bg-[url(/co-quoc-gia.png)] bg-[length:100%] bg-no-repeat w-8 h-5"
            style={{
              backgroundPositionY: ld.positionY,
              backgroundPositionX: 0,
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export { LanguageSwitcher, COOKIE_NAME };

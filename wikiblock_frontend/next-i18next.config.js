const path = require("path");
module.exports = {
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  i18n: {
    defaultLocale: "en",
    locales: ["vi",'en'],
    // localStorage: "en",
    localeDetection: true,
    localePath: path.resolve("./public/locales"),
    localeDetector: {
      order: ["querystring", "cookie", "header"],
      caches: ["cookie"],
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
    },
    useCookie: true,
    // fallbackLng: "en",
    // fallbackNS: ["common"],
    // // have a common namespace used around the full app
    // ns: ["common"],
    // defaultNS: "common",
  },
  react: {
    useSuspense: false,
  },
  localePath: path.resolve("./public/locales"),
};

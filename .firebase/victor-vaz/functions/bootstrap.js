const localizedApps = new Map();
const ffi18n = import("firebase-frameworks/i18n");
exports.handle = function(req,res) {
  ffi18n.then(({ getPreferredLocale }) => {
    const locale = getPreferredLocale(req, ["en","pt"], "en");
    if (localizedApps.has(locale)) {
      localizedApps.get(locale)(req,res);
    } else {
      Promise.resolve(require(`./dist/victor-vaz/server/${locale}/main.js`)).then(server => {
        const app = server.app(locale);
        localizedApps.set(locale, app);
        app(req,res);
      });
    }
  });
};

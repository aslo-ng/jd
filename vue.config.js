//  引入插件
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require("path");

module.exports = {
  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== "production") return;
    return {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, "dist"),
          // 对应实际路由文件，比如/about有参数，就需要写成 /about/**。
          routes: ["/", "/about", "/supermarket"],
          // 这个很重要，如果没有配置这段，也不会进行预编译
          renderer: new Renderer({
            inject: {
              foo: "bar",
            },
            renderAfterDocumentEvent: "render-event",
            renderAfterTime: 10000,
          }),
        }),
      ],
    };
  }, 
};

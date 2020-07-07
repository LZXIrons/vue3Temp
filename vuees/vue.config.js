const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    lintOnSave: true,
    chainWebpack: config => {
        config.resolve.alias
            .set("@$", resolve("src"))
            .set("@assets", resolve("src/assets"))
            .set("@components", resolve("src/components"));
    },
    devServer:{
        host: '0.0.0.0',//target host
        port: 8080
    }
};

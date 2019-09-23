module.exports = {
    outputDir: 'dist',   //build输出目录
    assetsDir: 'assets', //静态资源目录（js, css, img）
    lintOnSave: false, //是否开启eslint
    publicPath:'./',
    devServer: {
        open: true, //是否自动弹出浏览器页面
        host: "localhost",
        port: '3000',
        https: false,   //是否使用https协议
        hotOnly: false, //是否开启热更新
        disableHostCheck: true,
        proxy:  {
            '/api': {
                target: 'http://localhsot:3001', //API服务器的地址
                changeOrigin: true,
                secure: false,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
    }
}

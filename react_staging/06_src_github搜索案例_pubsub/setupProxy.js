const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api1', {//遇到api1前缀的请求，就会触发该代理配置
            target: 'http://localhost:5000',//请求转发个谁
            changeOrigin: true,//控制服务器接收到的请求头重的host值会让服务器知道是从哪里发出来的服务器收到的请求头中的host为：localhost:5000
            
            pathRewrite: { '^/api1': '' }//替换掉路径，因为域名加端口不会出现这个
        }),
    )
}
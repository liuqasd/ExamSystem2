module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:80", // 后端项目的地址和端口
        changeOrigin: true
      }
    }
  }
};

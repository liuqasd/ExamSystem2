module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:80", // �����Ŀ�ĵ�ַ�Ͷ˿�
        changeOrigin: true
      }
    }
  }
};

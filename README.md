
<div align="center">
  <a href="https://github.com/Hazelwu2/express-scaffold.git">
    <img src="./logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Express 腳手架</h3>

  <p align="center">
    🌱 Nodejs Express 腳手架
    <br />
    <a href="https://github.com/Hazelwu2/express-scaffold/issues">Report Bug</a>
    ·
    <a href="#">線上Demo</a>
  </p>
</div>

## 🛖 About This Project
使用 Nodejs Express 腳手架，已建立好架構包含 Model, Controller, Router 等檔案，可快速開發專案

- 設定 MongoDB 連線
- 全域捕捉錯誤 Global Error
- 開放全域 CORS
- 封裝 Response Success
- 封裝錯誤訊息 ApiState
- Router Post 設置
- Controller Post 設置
- Model Post 設置
- .gitignore 設置

也就是說你什麼都不用做，便可以快速請求 [GET] `/api/v1/posts/` API 取得結果

## 🔨 Built With
此專案會用到的 Framework / Library 或工具

* [Nodejs](https://github.com/nodejs)
* [Git](https://git-scm.com/)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [Mongoose](https://mongoosejs.com/)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [validator](https://www.npmjs.com/package/validator)

## 👨‍💻 Getting Started
以下照著範例做，可以讓你在本地端 run 此專案

1. Clone the Repo
  ```sh
    git clone git@github.com:Hazelwu2/express-scaffold.git
  ```
2. Install NPM packages
  ```
  cd express-scaffold
  npm install
  ```
3. Setup .env to connect DB
  ```
  cp .env.example .env
  設定 .env 參數 DB_URL, DB_PASSWORD，遠端資料庫使用 MongoDB Atlas
  ```

3. Start Runing Server
  ```
  npm run dev
  ```
4. Deploy to heroku
  ```
  herku create express-scaffold
  git push heroku main
  ```
5. Setting Heroku Variable
  ```
  Project/Settings
  Config Vars Add "DB_URL", "DB_PASSWORD"
  ```
6. DEBUG in Heroku
  ```
  heroku logs --tail
  ```

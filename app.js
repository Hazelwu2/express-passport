const express = require('express')
const morgan = require('morgan')
const app = express()
const ApiState = require('./utils/apiState')
const cors = require('cors')
const corsOptions = require('./utils/cors')

// Router
const postRouter = require('./router/post')
const authRouter = require('./router/auth')
// Controller
const globalErrorHandler = require('./utils/globalError')
const AppError = require('./utils/appError')

app.use(morgan('dev'))
app.use(cors(corsOptions))
app.use(express.json())

// Router
app.use('/posts', postRouter)
app.use('/auth', authRouter)

// 無此路由
app.use('*', (req, res, next) => {
  next(new AppError(ApiState.ROUTER_NOT_FOUND))
})

// 處理錯誤
app.use(globalErrorHandler)

module.exports = app
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var session = require('express-session')
var router = require('./routes/router.js')

var app = express()

app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './view/')) // 默认就是 ./views 目录

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(session({
    // 配置加密字符串
    secret: 'itcast',
    resave: false,
    saveUninitialized: false // 分配钥匙
}))
  
// 路由挂载到 app 中
app.use(router)

// 配置 404 中间件
app.use(function (req, res) {
res.render('404.html')
})

// 配置全局错误处理中间件
app.use(function (err, req, res, next) {
res.status(500).json({
    err_code: 500,
    message: err.message
})
})

app.listen(5000, function () {
    console.log('running...')
})
  
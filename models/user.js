var mongoose = require('mongoose')
var sd = require('silly-datetime');

// 连接数据库
mongoose.connect('mongodb://localhost/gitme', { useUnifiedTopology: true, useNewUrlParser: true })

var Schema = mongoose.Schema

var userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  title: {
    type: Object,
    default: {
      bt: '[bt]',
      nr: 'nr'
    }
  },
  created_time: {
    type: Date,
    // 注意：这里不要写 Date.now() 因为会即刻调用
    // 这里直接给了一个方法：Date.now
    // 当你去 new Model 的时候，如果你没有传递 create_time ，则 mongoose 就会调用 default 指定的Date.now 方法，使用其返回值作为默认值
    default: Date.now
  },
  last_modified_time: {
    type: Date,
    default: Date.now
  },
  bio: {
    type: String,
    default: ''
  },
  status: {
    type: Number,
    // 0 没有权限限制
    // 1 不可以评论
    // 2 不可以登录
    enum: [0, 1, 2],
    default: 0
  }
})

var titleSchema = new Schema({
  titleName: {
    type: String,
    default: '[TITLE]'
  },
  titleInfo: {
    type: String,
    default: ''
  }
})

var db = {
  User1: mongoose.model('User', userSchema),
  Title1: mongoose.model('Title', titleSchema)
}
module.exports = db

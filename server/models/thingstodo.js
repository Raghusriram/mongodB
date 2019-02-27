const mongoose = require('mongoose')

var thingstodo = mongoose.model('thingstodo',{
  text :{
    type : String,
    minlength:1

  },completed:{
    type :Boolean,
    default: true

  },completedAt :{
    type :Number,
    default:0
  }
})

module.exports ={thingstodo}

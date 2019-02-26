const mongoose = require('mongoose')

var thingstodo = mongoose.model('thingstodo',{
  text :{
    type : String

  },completed:{
    type :Boolean

  },completedAt :{
    type :Number
  }
})

module.exports ={thingstodo}

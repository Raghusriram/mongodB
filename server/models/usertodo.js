const mongoose = require('mongoose')

var usertodo = mongoose.model('userRoles',{
  username : {
    type : String,
    required : true,
    default : 'user'
  },hoursToWork :{
    type : Number,
    default : 10
  },work :{
    type : String,
    default : 'Employee'
  }
})

module.exports = {usertodo}

const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/application')
var thingstodo = mongoose.model('thingstodo',{
  text :{
    type : String

  },completed:{
    type :Boolean

  },completedAt :{
    type :Number
  }
})

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

var newtodo = new thingstodo({
  text : 'learn something'
})

newtodo.save().then((doc)=>{
  console.log('saved',doc);
},(e)=>{
  console.log("unable to do");
})

var othernewtodo = new thingstodo({
  text : 'more to do',
  completed : false,
  completedAt : 0
})

othernewtodo.save().then((doc)=>{
  console.log(JSON.stringify(doc, undefined,2));
})

var ustd = new usertodo({
  username :'Raghu',
  hoursToWork :20,
  work :'Look over'
})
ustd.save().then((doc)=>{
  console.log(JSON.stringify(doc,undefined,2));
},(e)=>{
  console.log(e);
})

var ust = new usertodo({
  work :'Lead Over'
})
ust.save().then((doc)=>{
  console.log(JSON.stringify(doc,undefined,2));
},(e)=>{
  console.log(e);
})

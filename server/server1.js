var express = require('express')
var body-parser = require('body-parser')


var {mongoose} = require('./db/mongooseconfig')
var {usertodo} = require('./models/usertodo')
var {thingstodo} = require('./models/thingstodo')

var app = express()

app.listen(3000,()=>{
  console.log('sucessfully connected');
})

//
// var newtodo = new thingstodo({
//   text : 'learn something'
// })
//
// newtodo.save().then((doc)=>{
//   console.log('saved',doc);
// },(e)=>{
//   console.log("unable to do");
// })
//
// var othernewtodo = new thingstodo({
//   text : 'more to do',
//   completed : false,
//   completedAt : 0
// })
//
// othernewtodo.save().then((doc)=>{
//   console.log(JSON.stringify(doc, undefined,2));
// })
//
// var ustd = new usertodo({
//   username :'Raghu',
//   hoursToWork :20,
//   work :'Look over'
// })
// ustd.save().then((doc)=>{
//   console.log(JSON.stringify(doc,undefined,2));
// },(e)=>{
//   console.log(e);
// })
//
// var ust = new usertodo({
//   work :'Lead Over'
// })
// ust.save().then((doc)=>{
//   console.log(JSON.stringify(doc,undefined,2));
// },(e)=>{
//   console.log(e);
// })

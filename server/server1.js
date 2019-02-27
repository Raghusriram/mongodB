var express = require('express')
var bodyparser = require('body-parser')


var {mongoose} = require('./db/mongooseconfig')
var {usertodo} = require('./models/usertodo')
var {thingstodo} = require('./models/thingstodo')

var app = express()

app.use(bodyparser.json())

app.post('/usertodo',(req,res)=>{
    var todo = new usertodo({
      username : req.body.username
    })
    todo.save().then((doc)=>{
      res.send(doc)
    },(e)=>{
      res.status(404).send(e)
    })
})

app.get('/usertodo',(req,res)=>{
  usertodo.find().then((usertodo)=>{
    res.send({usertodo})
  },(e)=>{
    res.status(400).send(e)
  })
})

app.listen(3000,()=>{
  console.log('sucessfully connected ha');
})

module.exports = {app}

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

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
  if(err){
  return console.log('unable to connect to mongo db server');
  }
  console.log("connected successfully");
  const db = client.db('TodoApp')

  // var user ={name:'deepak',age :30}
  //
  // var {name} = user.name
  // console.log({name});

//   db.collection('TOdos').insertOne({
//     text:'something to do',
//     completed:false
//
//   },(err,results) =>{
//     if(err)
//     return console.log("unable to inser to do");
//     console.log(JSON.stringify(results.ops,undefined,2));
//   })
//
//
// db.collection('Users').insertOne({
//   name:'Raghu',
//   age:20,
//   location:'Bengaluru'
// },(err,results)=>{
//   if(err)
//   console.log("unable to add a user");
//   else {
//     console.log(JSON.stringify(results.ops,undefined,2));
  // }

db.collection('Useradmin').insertOne({
    name:'parvathi',
    age:21,
    location:'Bengaluru'
},(err,results)=>{
    if(err)
    console.log("unable to add a user");
    else {
      console.log(JSON.stringify(results.ops[0]._id.getTimestamp(),undefined,2));
  }

})
  client.close()
})

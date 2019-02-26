// const MongoClient = require('mongodb').MongoClient
const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
  if(err){
  return console.log('unable to connect to mongo db server');
  }
  console.log("connected successfully");
  const db = client.db('TodoApp')

  // db.collection('Useradmin').findOneAndUpdate({
  //   name : 'Deepak'
  // },{
  //   $set :{
  //     age : 100
  //   }
  // },{
  //   returnOriginal: false
  // }).then((res)=>{
  //   console.log(res);
  // })

  db.collection('Useradmin').findOneAndUpdate({
    _id : new ObjectID('5c737e6f58fbae0dae32aa74')
  },{
    $set :{
      age : 20
    }
  }).then((res)=>{
    console.log(res);
  })

  // client.close()
})

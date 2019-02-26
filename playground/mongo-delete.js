// const MongoClient = require('mongodb').MongoClient
const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
  if(err){
  return console.log('unable to connect to mongo db server');
  }
  console.log("connected successfully");
  const db = client.db('TodoApp')

  db.collection('TOdos').deleteMany({text:'something to do'}).then((output)=>{
    console.log(output);
  })

  //we also ahve similar functions used to delete objects

  //deleteOne()=>deletes one object in database
  //findOneAndDelete()=> find the object with given arument and deletes that one

  // client.close()
})

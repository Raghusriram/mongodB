// const MongoClient = require('mongodb').MongoClient
const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
  if(err){
  return console.log('unable to connect to mongo db server');
  }
  console.log("connected successfully");
  const db = client.db('TodoApp')
  db.collection('Useradmin').find({name:'Raghu'}).toArray().then((err,docs)=>{
    if(err)
    console.log("unable to fetch adat",err);
    else {
      console.log(JSON.stringify(Useradmin,undefined,2));
    }
  })

  db.collection('Useradmin').find().count().then((count)=> {
      console.log('count :',count);
  })

  // client.close()
})

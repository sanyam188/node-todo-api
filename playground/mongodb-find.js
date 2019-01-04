// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
console.log('i');
const url = 'mongodb://localhost:27017/TodoApp'
MongoClient.connect(url,(err,client)=>{
  if(err){
    return console.log('Unaable to connect');
  }
  console.log('Connected Successfully');

  const db = client.db('TodoApp');
  db.collection('Users').find({name:'Tiwari' }).count().then((count)=>{
    //console.log(JSON.stringify(docs,undefined,1));
    console.log(count);
  },(err)=>{
    console.log('Unable to Fetch Data.');
  });

// const db = client.db('TodoApp');
//
// db.collection('Users').insertOne({
//   test:'Challenge'
// },(err,result)=>{
//   if(err){
//     console.log('NOT ADDED');
//   }
//   console.log('COLLECTION ADDED');
//
//   console.log(JSON.stringify(result.ops,undefined,1));


// db.collection('TodoApp'). insertOne({
//   test : 'Just Testing the Database',
//   user : 'I me and myself'
// },(err,result)=>{
// if(err){
//   return console.log('Collection NOT added');
// }
// console.log('UPDATED');
// console.log(JSON.stringify(result.ops,undefined,2));});

//client.close();
},);

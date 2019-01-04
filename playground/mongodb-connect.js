const MongoClient = require('mongodb').MongoClient;
console.log('i');
const url = 'mongodb://localhost:27017/TodoApp'
MongoClient.connect(url,(err,client)=>{
  if(err){
    return console.log('Unaable to connect');
  }
  console.log('Connected Successfully');

const db = client.db('TodoApp');

db.collection('Users').insertOne({
  name :'Shetty',
  profession : 'coder'
},(err,result)=>{
  if(err){
    console.log('NOT ADDED');
  }
  console.log('COLLECTION ADDED');

  console.log(JSON.stringify(result.ops,undefined,1));

});



























// db.collection('TodoApp'). insertOne({
//   test : 'Just Testing the Database',
//   user : 'I me and myself'
// },(err,result)=>{
// if(err){
//   return console.log('Collection NOT added');
// }
// console.log('UPDATED');
// console.log(JSON.stringify(result.ops,undefined,2));});

client.close();
});

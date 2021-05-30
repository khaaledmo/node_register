const {MongoClient , ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err ,db)=>{
    if(err){
        return console.log('unable to connect');
    }
    console.log('connected');
    db.collection('Todos').insertOne({
        text : "iam here",
        sense : "i can see and smell",
        completed : false

    } ,(err , res)=>{
        if(err){
            console.log('unable to insert' , err);
        }
        console.log(JSON.stringify(res.ops, undefined , 2));
    });
    db.collection('Users').insertOne({
        name : 'khaled',
        age : 22,
        completed : false
    },
    (err , res)=>{
        if(err){
            console.log('unable to insert' , err);
        }
        console.log(JSON.stringify(res.ops, undefined , 2));
    })
    db.close();

    });
  

   
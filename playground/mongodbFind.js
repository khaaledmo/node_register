const {MongoClient , ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('unable to connect');
    }
    console.log('connected');
    db.collection('Todos').find().toArray().then((docs)=>{
        console.log(docs);

    })
    db.close();

})
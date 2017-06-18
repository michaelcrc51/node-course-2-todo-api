//const MongoClient = require('mongodb').MongoClient; // This is the same as const {MongoClient} = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server'); //a return here stops the function - like an else clause
    } else {
        console.log('Connected to MongoDB server');
    }
    
//    Standard call to get all from a collection/table
//    db.collection('Todos').find().toArray().then((docs) => { //returns a promise
//        console.log('Todos');
//        console.log(JSON.stringify(docs, undefined, 2));
//    }, (err) => {
//        console.log('Unable to fetch Todos', err);
//    });
//    
//    Call to get ONLY non-completed todos
//    db.collection('Todos').find({completed: false}).toArray().then((docs) => { //returns a promise
//        console.log('Todos');
//        console.log(JSON.stringify(docs, undefined, 2));
//    }, (err) => {
//        console.log('Unable to fetch Todos', err);
//    });
//    
//Find by object ID
//    db.collection('Todos').find({
//        _id: new ObjectID('5946ee089d28311da8e2b656') //Gets record by _id as an OBJECT as above in the const
//    }).toArray().then((docs) => { //returns a promise
//        console.log('Todos');
//        console.log(JSON.stringify(docs, undefined, 2));
//    }, (err) => {
//        console.log('Unable to fetch Todos', err);
//    });

 //    Using toCount vs toArray
//    db.collection('Todos').find().count().then((count) => { //returns a promise
//        console.log(`Todos count: ${count}`);
//    }, (err) => {
//        console.log('Unable to fetch Todos', err);
//    });
//    
    
    db.collection('Users').find({name: 'Mike'}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch users', err);
    });
    
    //db.close();
});


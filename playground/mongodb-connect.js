//const MongoClient = require('mongodb').MongoClient; // This is the same as const {MongoClient} = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');

/*
//Some ES6 magic to pull out a value from an object and assign it to a variable
var user = {name: 'Mike', age: '54'};
var {name} = user;
console.log(name);
*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server'); //a return here stops the function - like an else clause
    } else {
        console.log('Connected to MongoDB server');
    }
    
//    db.collection('Todos').insertOne({
//        text: 'Something to do',
//        completed: false
//    }, (err, result) => {
//        if (err) {
//           return console.log('Unable to insert todo', err); 
//        } else {
//            console.log(JSON.stringify(result.ops, undefined, 2));
//        }
//    });
//    
//    db.collection('Users').insertOne({
//        name: 'Mike',
//        age: 54,
//        location: 'Texas'
//    }, (err, result) => {
//        if (err) {
//           return console.log('Unable to insert user', err); 
//        } else {
//            console.log(result.ops[0]._id.getTimestamp());
//        }
//    });    
    db.close();
});

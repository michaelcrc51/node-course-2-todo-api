//const MongoClient = require('mongodb').MongoClient; // This is the same as const {MongoClient} = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server'); //a return here stops the function - like an else clause
    } else {
        console.log('Connected to MongoDB server');
    }

    //deleteMany
//    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//        console.log(result);
//    });
    
    //deleteOne
//    db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//        console.log(result);
//    });
    
    //findOneAndDelete
//    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//        console.log(result);
//    });

//chall
//    db.collection('Users').deleteMany({name: 'Mike'}).then((result) => {
//       console.log(result); 
//    });

//    db.collection('Users').deleteOne({_id: new ObjectID('5946f2d6c4d0b11abcc8a9ec')}).then((result) => { //should have used findOneAndDelete like blow
//        console.log(result);
//    });

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5946f50a9447f31c881c5889")}).then((result) => {
       console.log(JSON.stringify(result, undefined, 2));
    });
    
    //db.close();
});


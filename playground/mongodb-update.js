//const MongoClient = require('mongodb').MongoClient; // This is the same as const {MongoClient} = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server'); //a return here stops the function - like an else clause
    } else {
        console.log('Connected to MongoDB server');
    }

//    db.collection('Todos').findOneAndUpdate({
//        _id: new ObjectID('59482b16977cc6be373d1327')
//    }, {
//        $set: { //view all update operators at: https://docs.mongodb.com/manual/reference/operator/update/
//            completed: true
//        }
//    }, {
//            returnOriginal: false
//    }).then((result) => {
//        console.log(result);
//    });

//chall
//    db.collection('Users').findOneAndUpdate({
//        _id: new ObjectID('5946f5b217942a19a0316104')
//    }, {
//        $set: {
//            name: 'Mike'
//        }
//    }, {
//        returnOriginal: false
//    }).then((result) => {
//        console.log(result);
//    });
//    
    db.collection('Users').update(
    {
        _id: new ObjectID('5946f60251a8fc40903af164')
    }, {
        $inc: {
            age: 1
        }
    });
    
    //db.close();
});


const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove({}).then((result) => {
//    console.log(result);
//});

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '594b48eeeb506a03c2483574'}).then((todo) => {
    
});

Todo.findByIdAndRemove('594b48eeeb506a03c2483574').then((todo) => {
    console.log(todo);
});
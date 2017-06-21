const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

//chall
//load in users model
const {User} = require('./../server/models/user');

//User.findById
User.findById('5948563a4f7eed38d4033cfb').then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log('User: ', user);
}).catch ((e) => console.log(e));

//if no user - print User not found
//handle any error
//

//
//
//var id = '59498a6722b5253200e2963a';
//if (!ObjectID.isValid(id)) {
//    console.log('ID is not valid');
//}

//Todo.find({
//    _id:id
//}).then((todos) => {
//    console.log('Todos', todos);
//});
//
//Todo.findOne({
//    _id:id
//}).then((todo) => {
//    console.log('Todo', todo);
//});

//Todo.findById(id).then((todo) => {
//    if(!todo) {
//        return console.log('Id not found');
//    }
//    console.log('Todo by id', todo);
//}).catch((e) => console.log(e));
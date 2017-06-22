var {ObjectID} = require('mongodb');
var express = require('express');
var bodyParser = require('body-parser'); //alows us to send JSON TO the server

var {mongoose} = require('./db/mongoose');
var{Todo} = require('./models/todo');
var{User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
      text: req.body.text  
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});  
    }, (e) => {
        res.status(400).send(e);
    });
});

//GET /todos/1234
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    //chall
    //validate id using isValid
    if (!ObjectID.isValid(id)) {
        //if not valid - res.status(404).send()
        return res.status(404).send();
    }
    //findById
    Todo.findById(id).then((todo) => {
        //if no todo send back 404 no body
        if (!todo) {
            return res.status(404).send();
        }
        //success
            //if todo send back
        res.send({todo});
   //error
        //400 send empty body
    }).catch ((e) => {
        res.status(400).send();
    });
});

app.delete('/todos/:id', (req, res) => {
    //get the id
    var id = req.params.id;
    //validate the id if not valid 404
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    //remove todo by id
    Todo.findByIdAndRemove(id).then((todo) => {
        //if no doc send 404
        if (!todo) {
            return res.status(404).send();
        }
        //success
        //if doc send doc and 200
        res.status(200).send({todo});
        //error
    }).catch ((e) => {
        //404 with empty body
        res.status(400).send();
    });
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {app};
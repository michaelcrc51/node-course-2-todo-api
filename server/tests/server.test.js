const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

beforeEach((done) => {
   Todo.remove({}).then(() => {
       done();
   });
});

describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        var text = 'Test todo text';
        
        request(app) //supertest
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
        })
        .end((err, res) => {
            if (err) {
                return done(err);
            }
            Todo.find().then((todos) => {
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch ((e) => done(e));
        });
    });
    
    it('should not create todo with invalid body data', (done) => {
        //Create new test case
        //pass empty object
        //expect 400
        //no assumptions on body that comes back (res.body.text)
        //pass callback to .end
        //.length should be 0
        //don't need expect(todos[0]).text.toBe(text) as the array will be empty
        request(app) //supertest
            .post('/todos')
            .send({})
            .expect(400)
            .expect((res) => {
                expect(res.body.text).toBe();
        })
        .end((err, res) => {
            if (err) {
                return done(err);
            }
            Todo.find().then((todos) => {
                expect(todos.length).toBe(0);
                done();
            }).catch ((e) => done(e));
        });        
    });
    
});
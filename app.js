const express = require('express');
const app = express();

const todos = {todos: ['a list of todos']};
const newTodo = {todo: 'a new todo'};
const aTodo = {todo: 'a todo'};
const updatedTodo = {todo: 'this todo was updated'};
const modTodo = {todo: 'this todo was modified'};
const deletedTodo = {todo: 'this todo has been deleted'};

// return a JSON array of todo items
app.get('/api/todos', function(req, res) {
  // find all todos
  res.json(todos);
});

// post a JSON representation of a todo and have it saved. Returns the saved todo item in JSON.
app.post('/api/todos/', function(req, res) {
  // get form data and add to todos
  res.json(newTodo)
});

// get a specific todo item
app.get('/api/todos/:id', function(req, res) {
  // find the todo
  res.json(aTodo);
});

// update a todo item. Returns the modified todo item
app.put('/api/todos/:id', function(req, res) {
  // get some form data and update the record
  res.json(updatedTodo)
});

// partially update a todo item. Returns the modified todo item
app.patch('/api/todos/:id', function(req, res) {
  // get some form data and patch the todo item
  res.json(modTodo)
});

// deletes a todo item. Returns the todo item that was deleted
app.delete('/api/todos/:id', function(req, res) {
  // find the todo, and delete it
  res.json(deletedTodo);
});

app.listen(3030, function() { console.log("Listing to Deltron-3030:");});

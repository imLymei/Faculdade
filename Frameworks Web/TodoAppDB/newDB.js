#! /usr/bin/env node

console.log('Conectando ao mongoDB...');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);

var async = require('async')
var Tarefa = require('./models/tarefa')

var mongoose = require('mongoose');
var mongoDB = userArgs[0];

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const quantity = 50

async function gravaRegistros() {
  for (let number = 0; number < quantity; number++){
    await (new Tarefa({descricao: `Tarefa número ${number+1}`,statusRealizada: false})).save();
  }
  await mongoose.connection.close();
}

console.log('Criando tarefas...')

gravaRegistros()

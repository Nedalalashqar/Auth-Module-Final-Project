'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const gamesModels = require('./games/model');
const userModel = require('./users');
const Collection = require('./data-collection');

// const DATABASE_URL = process.env.DATABASE_URL;
// let sequelizeOptions = { dialectOptions: { ssl: { require: true, rejectUnauthorized: false, } } };
// const sequelize = new Sequelize(DATABASE_URL , sequelizeOptions);
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL||'postgres://localhost:5432/nedalalashqar';
// const DATABASE_URL = process.env.DATABASE_URL 

const sequelize = new Sequelize(DATABASE_URL);

const games = gamesModels(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  games: new Collection(games),
  users: userModel(sequelize, DataTypes),
};
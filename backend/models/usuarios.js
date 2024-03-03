const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');
const Notas = require('./notas.js');

const Usuarios = sequelize.define('Usuarios', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mail: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
}, {
  // Other model options go here
});

Usuarios.hasMany(Notas);
Notas.belongsTo(Usuarios);
//Usuarios.sync().then(res=>{console.log("sincronizacion Usuarios: ",res)});

module.exports = Usuarios;
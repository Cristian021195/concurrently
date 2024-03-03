const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const Notas = sequelize.define('Notas', {
  // Model attributes are defined here
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  /*status: {
    type: DataTypes.ENUM('normal','important','urgent'),
    defaultValue: 'normal'
  }, 
#important
#urgent
#normal
#personal
#business
#vacation
#holiday
#shop
#studies
#pets
#money
#events
#memory */
  categories: {
    type: DataTypes.STRING,
    //allowNull: false,
    defaultValue: 'normal, personal, memory'
  },
  archived: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  UsuarioMail: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
});

//Notas.sync().then(res=>{console.log("sincronizacion Notas: ",res)});

module.exports = Notas;
const { Sequelize } = require('sequelize');

/*const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../db/dataxxx.db'
});*/
const sequelize = new Sequelize('test-db','user','pass',{
    dialect:'sqlite',
    host:'./backend/db/data.db' // toma desde el root del proyecto
})

sequelize.authenticate()
.then(res=>{
    //console.log("conectado: ",res)
})
.catch(err=>{console.log("erroor al conectar: ",err)})

sequelize.sync()
//sequelize.sync({ force: true })
.then(res=>{
    //console.log('sincronizacion total: ', res)
})
.catch(err=>{console.log('s e: ',err.message)})

module.exports = sequelize;
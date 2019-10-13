const express = require('express');
const sqlite3 = require('sqlite3');
const Sequelize = require('sequelize');

const app = express();
app.use(express.json());

// Definimos la conexión con sequelize
// Parametros: db, usuario, password, json con datos de config(conectro base de datos, si es sqlite el archivo donde esta la db)
const sequelize = new Sequelize('proyecto-backend', null, null, {
  dialect: 'sqlite',
  storage: './proyecto-backend'
});

// ruta POST para crear un registro tarea
app.post('/pendientes', (req, res) => {

  // query insert
  let query = `
    INSERT INTO task(description)
    VALUES(?)
  `;
  // Ejecutar query
  // db.run(query, req.body.description);
  res.send('Tarea creada');

});

// asignar puerto para la escucha del servidor
app.listen(3000, () => {
  console.log('Listening on port 3000');
});


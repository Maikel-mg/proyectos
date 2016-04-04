
module.exports = function (app) {
  var Proyecto = require('../models/proyecto.js');

  // GET - Devuelve todos los proyectos
  findAll = function (req, res) {
    Proyecto.find(function (err, proyectos) {
      if (err) {
        console.log('ERROR: ' + err);
      } else {
        res.send(proyectos);
      }
    });
  };

  // GET - Devuelve el proyecto por ID
  findById = function (req, res) {
    Proyecto.findById(req.params.id, function (err, proyecto) {
      if (err) return res.status(500).send('Error : ' + err);

      res.status(200).json(proyecto);
    });
  };

  //POST - Inserta un nuevo proyecto
  addProyecto = function (req, res) {
    var proyecto = new Proyecto({
      nombre      : req.body.nombre,
      descripcion : req.body.descripcion,
      activo      : false
    });

    proyecto.save(function (err) {
      if (!err) {
        console.log('Creado proyecto : ' + req.body.nombre);
        res.status(200).json(proyecto);
      } else {
        console.log('ERROR: ' + err);
        res.status(500).send(err);
      }
    });


  }

  //PUT - Actualiza un registro
  updateProyecto = function (req, res) {
    Proyecto.findById(req.params.id, function (err, proyecto) {

      proyecto.nombre       = req.body.nombre;
      proyecto.descripcion  = req.body.descripcion;
      proyecto.activo       = req.body.activo;

      proyecto.save(function (err) {
          if (err) return res.status(500).send('Error : ' + err);

          res.status(200).json(proyecto);
      });
    });
  };

  deleteProyecto = function (req, res) {
    Proyecto.findById(req.params.id, function (err, proyecto){
        proyecto.remove(function (err) {
          if (err) return res.status(500).send(err);

          res.status(200).send();
        });
    });
  };

  app.route('/proyectos')
      .get (findAll)
      .post(addProyecto);

  app.route('/proyectos/:id')
      .get(findById)
      .put(updateProyecto)
      .delete(deleteProyecto);
}

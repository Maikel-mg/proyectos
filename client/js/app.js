var Backbone = require('backbone');


var Proyecto = Backbone.Model.extend({
  url : '/proyectos',
  idAttribute: "_id",
  defaults : {
    _id : null,
    nombre : null,
    descripcion : null,
    activo : false
  }
});

var Proyectos = Backbone.Collection.extend({
  url : '/proyectos',
  model: Proyecto
});


var p = new Proyectos();

window.maikel = p;

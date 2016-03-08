var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var proyectoSchema = new Schema({
    nombre :        { type : String },
    descripcion :   { type : String , required: true},
    activo :        { type : Boolean }
});

module.exports = mongoose.model('proyecto', proyectoSchema);

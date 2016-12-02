var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;

var Usuario = new Schema({  
  id:    { type: String },
  login:     { type: String },
  password:  { type: String },
  genre:    { type: String, enum:
  ['1', 'pepeolmos', 'hola1']
        },
  summary:  { type: String }
});
var tarjeta = new Schema({  
  id:    { type: String },
  credito:  { type: Number },
  genre:    { type: String, enum:
  ['111', '$20']
        },
  summary:  { type: String }
});
var recarga = new Schema({  
  id:    { type: String },
  importe:     { type: Number},
  genre:    { type: String, enum:
  ['1111', '$200']
        },
  summary:  { type: String }
});

module.exports = mongoose.model('ruta', ruta);  
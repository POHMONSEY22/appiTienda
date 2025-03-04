const mongoose = require('../config/database');

const SchemaProducto = new mongoose.Schema({
    referencia :{
        type: [Number, "la referencia debe ser entera "],
        required: [true,  "la referencia debe ser obligatorio"], 
        
    },
    nombre :{
        type: [String, "el nombre debe ser texto"], 
        required: [true, "el nombre debe ser obligatorio"],
    },
    precio :{
        type: [mongoose.Types.Decimal128, "el precio debe ser numerico"] ,
        default: 0,
        min: [0, 0, "los precios no puede ser negativos"],
    }  
},{versionKey: false});

const producto = mongoose.model('Producto',SchemaProducto);
module.exports = producto;
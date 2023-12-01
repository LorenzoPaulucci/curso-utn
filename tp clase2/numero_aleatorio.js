const Chance = require("chance");
const chance = new Chance();

function crear_numero_aleatorio(){
    numero_aleatorio = chance.integer({ min: 1, max: 100 });
    return numero_aleatorio;
}

module.exports = {crear_numero_aleatorio};
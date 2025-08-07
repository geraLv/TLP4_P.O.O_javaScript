String.prototype.concatenarPalabra = function (palabra) {
  return this.toString() + " " + palabra;
};

const palabra = "hola";

const resultado = palabra.concatenarPalabra("palabra");

console.log(palabra);
console.log(resultado);

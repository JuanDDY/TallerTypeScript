"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_js_1 = require("./data.js");
var tabla = document.querySelector('.cuerpo-Series');
if (tabla) {
    data_js_1.series.forEach(function (serie) {
        var row = document.createElement('tr');
        row.innerHTML = "\n            <th scope=\"row\">".concat(serie.id, "</th>\n            <th scope=\"row\">").concat(serie.nombre, "</td>\n            <th scope=\"row\">").concat(serie.canal, "</td>\n            <th scope=\"row\">").concat(serie.temporadas, "</td>");
        tabla.appendChild(row);
    });
}
else {
    console.error("No se encontró el elemento con la clase 'table'");
}
document.getElementsByTagName("h1")[0].innerHTML = "Hola desde Typescript";

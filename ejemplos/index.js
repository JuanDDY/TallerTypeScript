"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tabla = void 0;
const data_js_1 = require("./data.js");
exports.tabla = document.querySelector('table');
if (exports.tabla) {
    data_js_1.series.forEach((serie) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <th scope="row">${serie.id}</th>
            <th scope="row">${serie.nombre}</td>
            <th scope="row">${serie.canal}</td>
            <th scope="row">${serie.temporadas}</td>`;
        exports.tabla.appendChild(row);
    });
}
else {
    console.error("No se encontró el elemento con la clase 'table'");
}

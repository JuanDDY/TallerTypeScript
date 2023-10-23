import { series } from './data.js';
const tabla = document.getElementById('cuerpo-Series');
var sumatoria = 0;

function cargarTabla() {
    if (tabla) {
        series.forEach((serie) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <th scope="row">${serie.id}</th>
                <th scope="row">${serie.nombre}</td>
                <th scope="row">${serie.canal}</td>
                <th scope="row">${serie.temporadas}</td>`;
            tabla.appendChild(row);
        });
    }
    else {
        console.error("No se encontró el elemento con la clase 'table'");
    }
}

function promedioTemporadas() {
    if (tabla) {
        series.forEach((serie) => {
            sumatoria += serie.temporadas;
        });
    }
    const parrafo = document.getElementById('average');
    var promedio = sumatoria / series.length;
    parrafo.innerHTML = `Average seasons: ${promedio}`
}


cargarTabla();
promedioTemporadas()
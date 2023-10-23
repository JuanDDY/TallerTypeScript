import { series } from './data.js';
import { Serie } from './Serie.js';

const tabla: HTMLElement | null = document.querySelector('table');

if (tabla) {
    series.forEach((serie) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <th scope="row">${serie.id}</th>
            <th scope="row">${serie.nombre}</td>
            <th scope="row">${serie.canal}</td>
            <th scope="row">${serie.temporadas}</td>`

        tabla.appendChild(row);
    });


} else {
    console.error("No se encontró el elemento con la clase 'table'");
}
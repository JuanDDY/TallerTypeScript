import { series } from './data.js';
import { Serie } from './Serie.js';

export const tabla: HTMLElement | null = document.getElementById('cuerpo-Series');
const espacioCarta: HTMLElement | null = document.getElementById('cartaContenido');
var sumatoria: number = 0;


function cargarTabla():void{
    if (tabla) {
    series.forEach((serie) => {
        const row = document.createElement('tr'); // <td scope="row" id="nombreSerie">${serie.nombre}</td>
        row.innerHTML = `
            <td scope="row">${serie.id}</td>
            <td id="nombreSerie">${serie.nombre}</td>
            <td>${serie.canal}</td>
            <td>${serie.temporadas}</td>`

        tabla.appendChild(row);

        row.addEventListener('click', () => {cargarCarta(serie)});
    });

    } else {
        console.error("No se encontró el elemento con el id \"cuerpo-Series\"");
    }
}


function cargarCarta(serie: Serie):void{
    if(espacioCarta){
        espacioCarta.innerHTML = `<div class="card text-white bg-dark border-primary mb-5" style="width: 18rem;">
        <img class="card-img-top" src="${serie.imagen}" alt="Card image cap">
        <div class="card-body">
            <h3>${serie.nombre}</h3>
            <p class="card-text">${serie.descripcion}</p>
            <a href="${serie.link}">Clic aca para visitar la serie</a>
        </div>
      </div>`
    }
}


function promedioTemporadas():void{
    if (tabla) {
        series.forEach((serie) => {
            sumatoria += serie.temporadas;
        });
    }
    const parrafo = document.getElementById('average');
    var promedio = sumatoria / series.length;
    if (parrafo != null){
        parrafo.innerHTML = `Average seasons: ${promedio}`
    } else {
        console.error("No se encontró el elemento con el id \"average\"");
    }
    
}


cargarTabla();
promedioTemporadas()
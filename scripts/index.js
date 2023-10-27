import { series } from './data.js';
export var tabla = document.getElementById('cuerpo-Series');
var espacioCarta = document.getElementById('cartaContenido');
var sumatoria = 0;
function cargarTabla() {
    if (tabla) {
        series.forEach(function (serie) {
            var row = document.createElement('tr');
            row.innerHTML = "\n            <td scope=\"row\">".concat(serie.id, "</td>\n            <td scope=\"row\" id=\"nombreSerie\">").concat(serie.nombre, "</td>\n            <td scope=\"row\">").concat(serie.canal, "</td>\n            <td scope=\"row\">").concat(serie.temporadas, "</td>");
            tabla.appendChild(row);
            row.addEventListener('click', function () { cargarCarta(serie); });
        });
    }
    else {
        console.error("No se encontró el elemento con el id \"cuerpo-Series\"");
    }
}
function cargarCarta(serie) {
    if (espacioCarta) {
        espacioCarta.innerHTML = "<div class=\"card text-white bg-dark border-primary mb-5\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\" src=\"".concat(serie.imagen, "\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n            <h3>").concat(serie.nombre, "</h3>\n            <p class=\"card-text\">").concat(serie.descripcion, "</p>\n            <a href=\"").concat(serie.link, "\">Clic aca para visitar la serie</a>\n        </div>\n      </div>");
    }
}
function promedioTemporadas() {
    if (tabla) {
        series.forEach(function (serie) {
            sumatoria += serie.temporadas;
        });
    }
    var parrafo = document.getElementById('average');
    var promedio = sumatoria / series.length;
    if (parrafo != null) {
        parrafo.innerHTML = "Average seasons: ".concat(promedio);
    }
    else {
        console.error("No se encontró el elemento con el id \"average\"");
    }
}
cargarTabla();
promedioTemporadas();

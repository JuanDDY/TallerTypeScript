"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
var Serie = /** @class */ (function () {
    function Serie(id, nombre, canal, temporadas, descripcion, link, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.canal = canal;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.link = link;
        this.imagen = imagen;
    }
    return Serie;
}());
exports.Serie = Serie;

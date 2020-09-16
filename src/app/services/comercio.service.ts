import { Injectable } from "@angular/core";

@Injectable()
export class ComercioService {
    private comercios: string[];

    constructor() {
        this.comercios = ['Com1', 'Com2', 'Com3'];
    }

    public obtenerComercios() {
        return this.comercios;
    }

    public agregarComercio(comercio: string) {
        this.comercios.push(comercio);
    }
}
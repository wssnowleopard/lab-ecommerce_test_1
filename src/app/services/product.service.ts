import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    private products: Product[] = [
    { id: 1, nombre: 'Microscopio', precio: 1500, cantidadExistente: 10, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/microscopio_1.png' },
    { id: 2, nombre: 'Balanza Analítica', precio: 2000, cantidadExistente: 5, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/balanza_analitica_1.png' },
    { id: 3, nombre: 'Agitador Magnético', precio: 300, cantidadExistente: 15, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/agitador_magnetico_1.png' },
    { id: 4, nombre: 'Centrífuga', precio: 2500, cantidadExistente: 8, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/centrifuga_1.png' },
    { id: 5, nombre: 'pH-metro', precio: 500, cantidadExistente: 20, cantidadSolicitada: 0, categoria: 'equipos', imagen: 'assets/images/pH-metro_1.png' },
    { id: 6, nombre: 'Vaso de Precipitados', precio: 10, cantidadExistente: 100, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/beaker_500ml.png' },
    { id: 7, nombre: 'Matraz Erlenmeyer', precio: 15, cantidadExistente: 80, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/erlenmeyer_500ml.png' },
    { id: 8, nombre: 'Pipeta Graduada', precio: 8, cantidadExistente: 120, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/pipeta_graduada_10ml.png' },
    { id: 9, nombre: 'Bureta', precio: 25, cantidadExistente: 50, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/bureta_50ml.png' },
    { id: 10, nombre: 'Probeta', precio: 12, cantidadExistente: 90, cantidadSolicitada: 0, categoria: 'cristaleria', imagen: 'assets/images/probeta_500ml.png' },
    { id: 11, nombre: 'Hidróxido de Sodio', precio: 40, cantidadExistente: 30, cantidadSolicitada: 0, categoria: 'reactivos', imagen: 'assets/images/hidroxido_de_sodio_500g.png' },
    { id: 12, nombre: 'Etanol', precio: 30, cantidadExistente: 50, cantidadSolicitada: 0, categoria: 'reactivos', imagen: 'assets/images/etanol_pureza_96.png' },
    { id: 13, nombre: 'Metanol', precio: 35, cantidadExistente: 40, cantidadSolicitada: 0, categoria: 'reactivos', imagen: 'assets/images/metanol_puro.png' },
    { id: 14, nombre: 'Acetona', precio: 25, cantidadExistente: 60, cantidadSolicitada: 0, categoria: 'reactivos', imagen: 'assets/images/acetona_extrapura.png' },
  ];

  constructor() { }

  getProducts(categoria?: string) {
    if (categoria) {
      return of(this.products.filter(p => p.categoria === categoria));
    }
    return of(this.products);
  }

  getProduct(id: number) {
    return of(this.products.find(p => p.id === id));
  }
}

export interface Product {
  id: number;
  nombre: string;
  precio: number;
  cantidadExistente: number;
  cantidadSolicitada: number;
  categoria: 'equipos' | 'cristaleria' | 'reactivos';
  imagen: string;
}

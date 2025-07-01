import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();

  constructor() { }

  addToCart(product: Product) {
    const existingProduct = this.cartItems.find(p => p.id === product.id);
    if (existingProduct) {
      existingProduct.cantidadSolicitada += product.cantidadSolicitada;
    } else {
      this.cartItems.push({ ...product });
    }
    this.cart.next(this.cartItems);
  }

  getCartItems() {
    return this.cart$;
  }

  getTotal() {
    return this.cartItems.reduce((total, product) => total + (product.precio * product.cantidadSolicitada), 0);
  }

  removeItem(productId: number) {
    this.cartItems = this.cartItems.filter(p => p.id !== productId);
    this.cart.next(this.cartItems);
  }

  clearCart() {
    this.cartItems = [];
    this.cart.next(this.cartItems);
  }
}
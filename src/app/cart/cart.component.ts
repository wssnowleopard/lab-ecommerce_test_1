import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../interfaces/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { countryCodes } from '../interfaces/country-codes';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Product[] = [];
  totalItems = 0;
  showWhatsAppModal = false;
  customerName = '';
  customerPhone = '';
  whatsappMessage = '';
  countryCodes = countryCodes;
  selectedCountryCode = countryCodes.find(c => c.code === 'NI');

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      this.totalItems = this.cartService.getTotalItems();
    });
  }

  removeFromCart(productId: number) {
    this.cartService.removeItem(productId);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  openWhatsAppModal() {
    this.whatsappMessage = this.generateWhatsAppMessage();
    this.showWhatsAppModal = true;
  }

  closeWhatsAppModal() {
    this.showWhatsAppModal = false;
  }

  generateWhatsAppMessage() {
    let message = 'Hola, estoy interesado en los siguientes productos:\n\n';
    this.cartItems.forEach(item => {
      message += `${item.nombre} - Cantidad: ${item.cantidadSolicitada}\n`;
    });
    return message;
  }

  submitWhatsAppForm() {
    const phoneNumber = '50582724196';
    const fullPhoneNumber = `${this.selectedCountryCode?.dial_code}${this.customerPhone}`;
    const finalMessage = `Nombre: ${this.customerName}\nTeléfono: ${fullPhoneNumber}\n\n${this.whatsappMessage}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;
    window.open(whatsappUrl, '_blank');
    this.closeWhatsAppModal();
  }
}
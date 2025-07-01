import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  equipos: Product[] = [];
  cristaleria: Product[] = [];
  reactivos: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts('equipos').subscribe(products => {
      this.equipos = products.slice(0, 3);
    });
    this.productService.getProducts('cristaleria').subscribe(products => {
      this.cristaleria = products.slice(0, 3);
    });
    this.productService.getProducts('reactivos').subscribe(products => {
      this.reactivos = products.slice(0, 3);
    });
  }
}

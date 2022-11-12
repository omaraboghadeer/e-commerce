import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  // Detect any changes happend in cart
  // to update the cart in all app
  private shoppingCart_status = new BehaviorSubject(false);
  shoppingCart_currentStatus = this.shoppingCart_status.asObservable();

  cart: Product[] = [];

  constructor() { }

  addToShippingCart(product: Product) {
    this.cart.push(product);
    this.shoppingCart_status.next(true);
  }

}

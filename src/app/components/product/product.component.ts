import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product';
import { AppService } from 'src/app/core/services/app.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;

  constructor(
    public app: AppService
  ) { }

  ngOnInit(): void {
  }

}

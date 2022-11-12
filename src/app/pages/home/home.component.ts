import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { forkJoin } from 'rxjs';
import { Product, ProductsResponse } from 'src/app/core/interfaces/product';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products!: Product[];
  filters: any[] = [];

  constructor(
    private http: HttpClient,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    forkJoin(
      {
        products: this.http.get<ProductsResponse>(environment.baseUrl + 'products'),
        categories: this.http.get<String>(environment.baseUrl + 'products/categories')
      }
    ).subscribe(
      res => {
        this.products = res.products.products!;
        this.filters.push({
          title: 'category',
          id: 1,
          values: [...res.categories]
        });

        this.spinner.hide();
      },
      err => console.log(err)
    );
  }


  onChangeFilter(ev: string) {
    this.spinner.show();
    this.http.get<ProductsResponse>(environment.baseUrl + `products/category/${ev}`)
    .subscribe(
      res => {
        this.products = res.products!
        this.spinner.hide();
      },
      err => console.log(err)
    )
  }
}

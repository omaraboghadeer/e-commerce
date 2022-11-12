import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private appServices: AppService
  ) { }

  cart_length: number = 0;
  ngOnInit(): void {
    this.appServices.shoppingCart_currentStatus.subscribe(state => {
      if (state) this.cart_length = this.appServices.cart.length;
    });
  }

  onSearch(event: any) {
    // when key equal "Enter" => fetching data from api with input value as a params or payload 
    console.log(event.key)
  }
}

import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgxSpinnerModule } from "ngx-spinner";

import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from '../components/product/product.component';
import { FilterComponent } from '../components/filter/filter.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,

    // GLOBAL COMPONENTS
    ProductComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    NgxSpinnerModule,
  ],
  exports: [
    MainComponent,
    HeaderComponent,

    // GLOBAL COMPONENTS
    ProductComponent,
    FilterComponent,

    RouterModule,
    HttpClientModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    NgxSpinnerModule,
  ]
})
export class SharedModule { }

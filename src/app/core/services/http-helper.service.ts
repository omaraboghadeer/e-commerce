import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductsResponse } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {
  
  readonly baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }
  
  get(url: string) {
    return this.http.get<any>(this.baseUrl + url)
  }

  post(url: string, payload: {}) {
    return this.http.post(this.baseUrl + url, payload)
  }
}

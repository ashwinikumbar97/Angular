import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExchangeRateResponse } from './payloads/exchange-rate-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeService {

  constructor( private http:HttpClient){}
  
  getRates(base: string): Observable<ExchangeRateResponse> {
    return this.http.get<ExchangeRateResponse>(`https://api.exchangeratesapi.io/latest?base=${base}`);
  }
}

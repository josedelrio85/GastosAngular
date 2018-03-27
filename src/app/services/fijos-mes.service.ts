import { Injectable } from '@angular/core';
import { Gastos } from '../Modelos/Gastos';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { JsonPipe } from '@angular/common';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
};
httpOptions.headers.append('Accept', '*/*');

@Injectable()
export class FijosMesService {

  private url = "http://localhost:64006/api/FijosMes";
  
  constructor(private httpService: HttpClient) { }
  
  getFijosMesByMes(mes: number): Observable<any>{
    return this.httpService.get(`${this.url}/${mes}`);
  }

  add(item: Gastos): Observable<any>{
    return this.httpService.post<Gastos>(this.url, item, httpOptions);
  }

  delete(item: Gastos): any{
    return this.httpService.delete(`${this.url}/${item.id}`, httpOptions);
  }

}

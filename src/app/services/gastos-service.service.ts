import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Gastos } from '../Modelos/Gastos';

import { map, tap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
};
httpOptions.headers.append('Accept', '*/*');

@Injectable()
export class GastosService {

  constructor(private httpService:HttpClient) { }

  private url = environment.apiUrl + 'gastos'; 

  getGastos(): Observable<Gastos[]> {
    return this.httpService.get<Gastos[]>(this.url);
  }

  getGasto(id: number): Observable<Gastos>{
    return this.httpService.get<Gastos>(`${this.url}/${id}`);
  }

  updateGasto(item: Gastos): void { 
    // console.log(item)
    this.httpService.put<Gastos>(`${this.url}/${item.id}`, item, httpOptions)
    .pipe(tap(
      (a: Gastos) => {
        console.log(`tipo movimiento con id ${item.id} actualizada.`)        
      }
    ))
    .subscribe();
  }

  async addGasto(item: Gastos) {
    await this.httpService.post<Gastos>(this.url, item, httpOptions)
    .toPromise()
    .then();
    console.log("done!");
  }

  deleteGasto(id: number): Observable<Gastos>{
    return this.httpService.delete<Gastos>(`${this.url}/${id}`, httpOptions);
  }

  getMaxId(): Observable<Gastos> {
    const url = `${this.url}/getmaxid`;
    return this.httpService.get<Gastos>(url);
  }

  getGastosMes(fecha: string): Observable<Gastos[]> {
    return this.httpService.get<Gastos[]>(`${this.url}/gastosMes/${fecha}`);
  }

  getGastosResumen(anho?: number): Observable<any[]> {
    let url = this.url + "/resumenMes/ ";
    
    if(anho != undefined)
      url += anho;
      
    return this.httpService.get<any[]>(url);
  }

  getGastosMesSiguiente(): Observable<any[]> {
    return this.httpService.get<any[]>(`${this.url}/MesSiguiente`);
  }

  getResultanteMes(anho?: number): Observable<any[]> {
    let url = `${this.url}/resultanteMes/`;

    if(anho != undefined)
      url  += anho;
      
    return this.httpService.get<any[]>(url);
  }

  getResultanteMesGrafica(anho?: number): Observable<any[]> {
    let url = `${this.url}/ResultanteMesGrafica/`;

    if(anho != undefined)
      url += anho;

    return this.httpService.get<any[]>(url);
  }
}

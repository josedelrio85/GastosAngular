import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { TiposMovimiento } from '../Modelos/TiposMovimiento';

import { map, tap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
};
httpOptions.headers.append('Accept', '*/*');

@Injectable()
export class TiposMovimientoService {

  constructor(private httpService:HttpClient) { }

  private url = environment.apiUrl + 'TiposMovimiento';
 
  getTiposMovimiento(): Observable<TiposMovimiento[]> {
    return this.httpService.get<TiposMovimiento[]>(this.url);
  }

  getTipoMovimiento(id: number): Observable<TiposMovimiento>{
    return this.httpService.get<TiposMovimiento>(`${this.url}/${id}`);
  }

  async updateTipoMovimiento(item: TiposMovimiento) {
    await this.httpService.put<TiposMovimiento>(`${this.url}/${item.id}`, item, httpOptions)
     .toPromise()
     .then();
  }

  async addTipoMovimiento(item: TiposMovimiento) {
    await this.httpService.post<TiposMovimiento>(this.url, item, httpOptions)
    .toPromise()
    .then();
  }

  deleteTipoMovimiento(id: number): Observable<TiposMovimiento>{
    return this.httpService.delete<TiposMovimiento>(`${this.url}/${id}`, httpOptions);
  }

  getMaxId(): Observable<TiposMovimiento> {
    const url = `${this.url}/getmaxid`;
    return this.httpService.get<TiposMovimiento>(url);
  }

}

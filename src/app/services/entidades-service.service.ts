import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Entidades } from '../Modelos/Entidades';

import { map, tap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
};
httpOptions.headers.append('Accept', '*/*');

@Injectable()
export class EntidadesService {

  constructor(private httpService:HttpClient) { }

  private url = environment.apiUrl + 'entidades';

  getEntidades(): Observable<Entidades[]> {
    return this.httpService.get<Entidades[]>(this.url);
  }

  getEntidad(id: number): Observable<Entidades>{
    return this.httpService.get<Entidades>(`${this.url}/${id}`);
  }

  async updateEntidad(item: Entidades){
    this.httpService.put<Entidades>(`${this.url}/${item.id}`, item, httpOptions)
    .toPromise()
    .then();
  }

  async addEntidad(item: Entidades) {
    await this.httpService.post<Entidades>(this.url, item, httpOptions)
    .toPromise()
    .then();
  }

  deleteEntidad(id: number): Observable<Entidades>{
    return this.httpService.delete<Entidades>(`${this.url}/${id}`, httpOptions);
  }

  getMaxId(): Observable<Entidades> {
    const url = `${this.url}/getmaxid`;
    return this.httpService.get<Entidades>(url);
  }
}

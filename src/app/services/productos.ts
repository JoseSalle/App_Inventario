import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Productos {
  private url = 'http://localhost:3000/api/productos';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.url);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  create(producto: any): Observable<any> {
    return this.http.post(this.url, producto);
  }

  update(id: number, producto: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, producto);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}

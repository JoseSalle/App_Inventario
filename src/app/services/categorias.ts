import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class Categorias {
    private url = 'http://localhost:3000/api/categorias';

    constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
        return this.http.get(this.url);
    }

    getById(id: number): Observable<any> {
        return this.http.get(`${this.url}/${id}`);
    }

    create(categoria: any): Observable<any> {
        return this.http.post(this.url, categoria);
    }

    update(id: number, categoria: any): Observable<any> {
        return this.http.put(`${this.url}/${id}`, categoria);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(`${this.url}/${id}`);
    }
}

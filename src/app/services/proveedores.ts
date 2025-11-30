import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class Proveedores {
    private url = 'http://localhost:3000/api/proveedores';

    constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
        return this.http.get(this.url);
    }

    getById(id: number): Observable<any> {
        return this.http.get(`${this.url}/${id}`);
    }

    create(proveedor: any): Observable<any> {
        return this.http.post(this.url, proveedor);
    }

    update(id: number, proveedor: any): Observable<any> {
        return this.http.put(`${this.url}/${id}`, proveedor);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(`${this.url}/${id}`);
    }
}

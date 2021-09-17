import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Practice } from '../models/practice.model';

const baseUrl = 'http://localhost:8080/api/practices';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Practice[]> {
    return this.http.get<Practice[]>(baseUrl);
  }

  get(id: any): Observable<Practice> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any): Observable<Practice[]> {
    return this.http.get<Practice[]>(`${baseUrl}?name=${name}`);
  }
}

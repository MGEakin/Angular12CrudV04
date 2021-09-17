import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Opening } from '../models/opening.model';

const baseUrl = 'http://localhost:8080/api/openings';

@Injectable({
  providedIn: 'root'
})
export class OpeningService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Opening[]> {
    return this.http.get<Opening[]>(baseUrl);
  }

  get(id: any): Observable<Opening> {
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

  findByTitle(title: any): Observable<Opening[]> {
    return this.http.get<Opening[]>(`${baseUrl}?title=${title}`);
  }
}

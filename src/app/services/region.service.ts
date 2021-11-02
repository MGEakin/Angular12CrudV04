import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { Region } from '../models/region.model';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

const baseUrl = 'http://localhost:8080/api/regions';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getAll(): Observable<Region[]> {
    return this.http.get<Region[]>(baseUrl);
  }

  get(id: any): Observable<Region> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data).pipe(
      tap((newRegion: Region) => this.log(`added Region w/ id=${newRegion.id}`)),
      catchError(this.handleError<Region>(`addRegion`, data))
    );
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

  findByName(name: any): Observable<Region[]> {
    return this.http.get<Region[]>(`${baseUrl}?name=${name}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a RegionService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`RegionService: ${message}`);
  }
}


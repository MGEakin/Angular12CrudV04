import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';

import { Assignment } from '../models/assignment.model';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

const baseUrl = 'http://localhost:8080/api/assignments';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getAll(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(baseUrl);
  }

  get(id: any): Observable<Assignment> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  getByClient(clientId: any): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`${baseUrl}?clientId=${clientId}`)
      .pipe(
        tap(_ => this.log(`fetched ${baseUrl}?clientId=${clientId}`)),
        catchError(this.handleError<Assignment[]>('getByClient', []))
      );
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data).pipe(
      tap((newAssignment: Assignment) => this.log(`added Assignment w/ id=${newAssignment.id}`)),
      catchError(this.handleError<Assignment>(`addAssignment`, data))
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

  findByTitle(title: any): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`${baseUrl}?title=${title}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for region consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a TutorialService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TutorialService: ${message}`);
  }
}

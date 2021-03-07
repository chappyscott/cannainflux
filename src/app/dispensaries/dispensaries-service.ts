import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map, delay } from 'rxjs/operators';

import { Dispensary } from './dispensaries';

@Injectable({
  providedIn: 'root'
})

export class DispensariesService {
  private dispensariesUrl = 'api/dispensaries';

  constructor(private http: HttpClient) { }

  getDispensaries(): Observable<Dispensary[]> {
    return this.http.get<Dispensary[]>(this.dispensariesUrl)
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getDispensaryNames(): Observable<Dispensary[]> {
    return this.http.get<any[]>(this.dispensariesUrl)
      .pipe(
        map(data=>data.map(obj=>obj.dispensaryName)),
        catchError(this.handleError)
        );
  }


  getDispensary(id: number): Observable<Dispensary> {
    if (id === 0) {
      return of(this.initializeDispensary());
    }
    const url = `${this.dispensariesUrl}/${id}`;
    console.log(url);
    return this.http.get<Dispensary>(url)
      .pipe(
        delay(250), //pretend time
        tap(data => console.log('getDispensary: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createDispensary(dispensary: Dispensary): Observable<Dispensary> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    dispensary.id = 0;
    return this.http.post<Dispensary>(this.dispensariesUrl, dispensary, { headers })
      .pipe(
        tap(data => console.log('createDispensary: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteDispensary(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.dispensariesUrl}/${id}`;
    return this.http.delete<Dispensary>(url, { headers })
      .pipe(
        tap(data => console.log('deleteDispensary: ' + id)),
        catchError(this.handleError)
      );
  }

  updateDispensary(dispensary: Dispensary): Observable<Dispensary> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.dispensariesUrl}/${dispensary.id}`;
    return this.http.put<Dispensary>(url, dispensary, { headers })
      .pipe(
        tap(() => console.log('UpdateDispensary: ' + dispensary.id)),
        tap(() => console.log('UPDATE: ' + JSON.stringify(dispensary))),
        // Return the dispensary on an update
        map(() => dispensary),
        catchError(this.handleError)
      );
  }

  private handleError(err : any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  private initializeDispensary(): Dispensary {
    // Return an initialized object
    return {
      id: 0,
      dispensaryName: '',
      dispensaryNotes: '',
      dispensaryPrice: 0,
      dispensaryType: '',
    };
  }
}

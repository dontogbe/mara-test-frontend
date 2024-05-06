import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from './list';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListerService {
  private listUrl='https://localhost:7208/api/Items';
  httpOptions={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };
  constructor(private http: HttpClient) { }
  getList():Observable<Item[]>{
      return this.http.get<Item[]>(this.listUrl)
      .pipe(
        catchError(this.handleError<Item[]>('getList',[]))
      );
  }
  addItem(item:Item):Observable<Item> {
    return this.http.post<Item>(this.listUrl,item,this.httpOptions).pipe(
      catchError(this.handleError<Item>('addItem'))
    );
  }
  private handleError<T>(operation='operation', result?: T) {
    return (error:any): Observable<T>=>{
      console.error(error, operation);
      return of(result as T)
    };
  }
}

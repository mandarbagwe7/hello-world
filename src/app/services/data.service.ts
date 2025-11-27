import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private http: Http) { }

  getAll(){
    return this.http.get(this.url).pipe(
      map(response => response.json())
    );
  }

  create(resource){
    return this.http.post(this.url, JSON.stringify(resource))
        .pipe(
          map(response => response.json()),
          catchError(this.handleError)
        );
  }

  patch(resource){
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
        .pipe(
          map(response => response.json()),
          catchError(this.handleError)
        );
  }

  put(resource){
    return this.http.put(this.url + '/' + resource.id, JSON.stringify(resource))
        .pipe(
          map(response => response.json()),
          catchError(this.handleError)
        );
  }

  delete(id){
    return this.http.delete(this.url + 'a/' + id)
        .pipe(
          map(response => response.json()),
          catchError(this.handleError)
        );
  }

  private handleError(error: Response){
    if(error.status == 400){
      return throwError(new BadRequestError(error));
    }
    if(error.status === 404){
      return throwError(new NotFoundError(error));
    }
    return throwError(new AppError(error));
  }

}

import { Injectable } from '@angular/core';
import { User } from "./user";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { LoggerService } from "./logger.service";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'api/users'

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl).pipe(
      tap(users => this.logger.info(`fetched ${users.length} users`)),
      catchError(this.handleError('fetch users', []))
    )
  }

  getUser(id: string): Observable<User> {
    const url = `${this.userUrl}/${id}`
    return this.http.get<User>(url).pipe(
      tap(user => this.logger.info(`fetch user success: ${user.id}, ${user.username}`)),
      catchError(this.handleError('fetch user', {} as User))
    )
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user, httpOptions).pipe(
      tap(user => this.logger.info(`add user success: ${user.id}`)),
      catchError(this.handleError<User>('add user'))
    )
  }

  deleteUser(user: User | string): Observable<User> {
    const id = typeof user === 'string' ? user : user.id
    const url = `${this.userUrl}/${id}`

    return this.http.delete<User>(url, httpOptions).pipe(
      tap(_ => this.logger.info(`delete user success: ${id}`)),
      catchError(this.handleError<User>('delete user'))
    )
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.userUrl, user, httpOptions).pipe(
      tap(_ => this.logger.info(`update user success: ${user.id}`)),
      catchError(this.handleError<User>('update user'))
    )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.logger.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  constructor(private http: HttpClient,
     private logger: LoggerService) { }
}

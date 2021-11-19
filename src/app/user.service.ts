import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = `${environment.apiBaseUrl}/api/v1/users`;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiServerUrl);
  }

  public newUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiServerUrl, user);
  }

  public updateUser(user: User, objectId: string): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/${objectId}`, user)
  }

  public deleteUser(objectId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/${objectId}`);
  }
}

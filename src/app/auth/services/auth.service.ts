import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environments';
import { UserI } from '../interfaces/user.interface';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = environments.baseUrl;
  private user?: UserI;

  constructor(private httpClient: HttpClient) {}

  get currentUser(): UserI | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user);
  }

  login(email: string, password: string): Observable<UserI> {
    return this.httpClient.get<UserI>(`${this.baseUrl}/users/1`).pipe(
      tap((user) => (this.user = user)),
      tap((user) => localStorage.setItem('token', 'kjejeRWetbr.bwrbjworehbtiwrebtll')),
    );
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem('token');
  }
}

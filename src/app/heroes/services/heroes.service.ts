import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { HeroI } from '../interfaces/hero.interface';
import { environments } from '../../../environments/environments';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  private baseUrl: string = environments.baseUrl;

  constructor(private httpClient: HttpClient) {}

  getHeroes(): Observable<HeroI[]> {
    return this.httpClient.get<HeroI[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById(id: string): Observable<HeroI | undefined> {
    return this.httpClient
      .get<HeroI>(`${this.baseUrl}/heroes/${id}`)
      .pipe(catchError((error) => of(undefined)));
  }

  getSuggestions(query: string): Observable<HeroI[]> {
    return this.httpClient.get<HeroI[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`);
  }
}

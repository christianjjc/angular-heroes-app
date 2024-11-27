import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
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

  addHero(hero: HeroI): Observable<HeroI> {
    return this.httpClient.post<HeroI>(`${this.baseUrl}/heroes`, hero);
  }

  updateHero(hero: HeroI): Observable<HeroI> {
    if (!hero.id) throw Error('Hero id is required');
    return this.httpClient.patch<HeroI>(`${this.baseUrl}/heroes/${hero.id}`, hero);
  }

  deleteHeroById(id: string): Observable<boolean> {
    return this.httpClient.delete(`${this.baseUrl}/heroes/${id}`).pipe(
      map((resp) => true),
      catchError((err) => of(false)),
    );
  }
}

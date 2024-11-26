import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { HeroesService } from '../../services/heroes.service';
import { HeroI } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-search-page',
  standalone: false,

  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css',
})
export class SearchPageComponent {
  public searchInput = new FormControl('');
  public heroes: HeroI[] = [];
  public selectedHero?: HeroI;

  constructor(private heroesService: HeroesService) {}

  searchHero() {
    const value: string = this.searchInput.value || '';
    this.heroesService.getSuggestions(value).subscribe((heroes) => (this.heroes = heroes));
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedHero = undefined;
      return;
    }
    const hero: HeroI = event.option.value;
    this.searchInput.setValue(hero.superhero);
    this.selectedHero = hero;
  }
}

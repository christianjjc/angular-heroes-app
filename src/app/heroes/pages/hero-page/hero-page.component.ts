import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { HeroI } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  standalone: false,

  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
})
export class HeroPageComponent implements OnInit {
  public hero?: HeroI;

  constructor(
    //
    private heroService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        delay(1000),
        switchMap(({ id }) => this.heroService.getHeroById(id)),
      )
      .subscribe((hero) => {
        if (!hero) return this.router.navigate(['/heroes/list']);
        // console.log(hero);
        this.hero = hero;
        return;
      });
  }

  goBack(): void {
    this.router.navigateByUrl('heroes/list');
  }
}

import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { HeroI } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input()
  public hero!: HeroI;

  ngOnInit(): void {
    if (!this.hero) throw Error('Hero property is required!');
  }
}

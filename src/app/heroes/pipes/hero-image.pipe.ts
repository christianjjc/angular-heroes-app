import { Pipe, type PipeTransform } from '@angular/core';
import { HeroI } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroImage',
  standalone: false,
})
export class HeroImagePipe implements PipeTransform {
  transform(hero: HeroI): string {
    if (!hero.id && !hero.alt_img) return 'no-image.png';

    if (hero.alt_img) return hero.alt_img;

    return `heroes/${hero.id}.jpg`;
  }
}

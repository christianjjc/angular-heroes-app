import { Component } from '@angular/core';

@Component({
  selector: 'app-new-page',
  standalone: false,

  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.css',
})
export class NewPageComponent {
  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];
}

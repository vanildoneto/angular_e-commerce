import { Component } from '@angular/core';
import { CardProductComponent } from '../card-product/card-product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

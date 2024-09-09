import { Component, OnInit} from '@angular/core';
import { ApiprodutosService } from '../../services/apiprodutos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {
  produtos: any[] = [];

 constructor(
  private apiService: ApiprodutosService 
 ) {}

 ngOnInit(): void {
    this.apiService.buscarProdutos().subscribe((data) => {
      this.produtos = data;
      console.log(data)
    })
 }



}

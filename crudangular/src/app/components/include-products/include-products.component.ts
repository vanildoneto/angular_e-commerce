import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiprodutosService } from '../../services/apiprodutos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-include-products',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './include-products.component.html',
  styleUrls: ['./include-products.component.css']
})
export class IncludeProductsComponent implements OnInit {
  produtoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiprodutosService,
    private router: Router
  ) {
    // Inicializar o FormGroup com campos vazios
    this.produtoForm = this.formBuilder.group({
      nome_produto: ['', Validators.required],
      tipo: ['', Validators.required],
      marca: ['', Validators.required],
      imagem_url: ['', Validators.required]  // Corrigido para 'imagem_url'
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.produtoForm.valid) {
        const produto = {
            nome_produto: this.produtoForm.get('nome_produto')?.value,
            tipo: this.produtoForm.get('tipo')?.value,
            marca: this.produtoForm.get('marca')?.value,
            imagem_url: this.produtoForm.get('imagem_url')?.value,
        };

        // Enviar os dados para o backend
        this.apiService.adicionarProdutos(produto).subscribe({
            next: (response) => {
                console.log('Produto adicionado com sucesso!', response);
                this.router.navigate(['/']); // Redirecionar após sucesso
            },
            error: (error) => {
                console.error('Erro ao adicionar produto:', error);
            },
            complete: () => {
                console.log('Operação completa.');
            }
        });
    }
  }

}

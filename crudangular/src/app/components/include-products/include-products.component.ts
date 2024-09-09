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
      imagem_url: [null, Validators.required]  // Corrigido para 'imagem_url'
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.produtoForm.valid) {
      const formData = new FormData();
      formData.append('nome_produto', this.produtoForm.get('nome_produto')?.value);
      formData.append('tipo', this.produtoForm.get('tipo')?.value);
      formData.append('marca', this.produtoForm.get('marca')?.value);

      // Corrigido para adicionar o arquivo em vez do nome do arquivo
      const file = this.produtoForm.get('imagem_url')?.value;
      if (file) {
        formData.append('imagem_url', file, file.name);
      }

      formData.forEach((value, key) => {
        console.log(key, value);
      });
      
      // Enviar os dados para o backend
      this.apiService.adicionarProdutos(formData).subscribe({
        next: (response) => {
          console.log('Produto adicionado com sucesso!', response);
          this.router.navigate(['/']);
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

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.produtoForm.patchValue({
        imagem_url: file 
      });
    }
  }
}

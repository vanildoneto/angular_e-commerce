import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiprodutosService {

  private apiUrl = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) { }  // Corrigido 'htpp' para 'http'

  buscarProdutos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);  // Corrigido 'htpp' para 'http'
  }

  adicionarProdutos(formData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);  // Corrigido 'FormData' para 'formData'
  }
  
}

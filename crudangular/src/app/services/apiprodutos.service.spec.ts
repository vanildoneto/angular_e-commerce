import { TestBed } from '@angular/core/testing';

import { ApiprodutosService } from './apiprodutos.service';

describe('ApiprodutosService', () => {
  let service: ApiprodutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiprodutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludeProductsComponent } from './include-products.component';

describe('IncludeProductsComponent', () => {
  let component: IncludeProductsComponent;
  let fixture: ComponentFixture<IncludeProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncludeProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncludeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSellerProductComponent } from './new-seller-product.component';

describe('NewSellerProductComponent', () => {
  let component: NewSellerProductComponent;
  let fixture: ComponentFixture<NewSellerProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSellerProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSellerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

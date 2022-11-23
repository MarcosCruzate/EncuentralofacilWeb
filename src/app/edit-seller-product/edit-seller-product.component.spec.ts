import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSellerProductComponent } from './edit-seller-product.component';

describe('EditSellerProductComponent', () => {
  let component: EditSellerProductComponent;
  let fixture: ComponentFixture<EditSellerProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSellerProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSellerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidossComponent } from './pedidoss.component';

describe('PedidossComponent', () => {
  let component: PedidossComponent;
  let fixture: ComponentFixture<PedidossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PedidossComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PedidossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

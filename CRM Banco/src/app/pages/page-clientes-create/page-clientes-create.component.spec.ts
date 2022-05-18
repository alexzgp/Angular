import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageClientesCreateComponent } from './page-clientes-create.component';

describe('PageClientesCreateComponent', () => {
  let component: PageClientesCreateComponent;
  let fixture: ComponentFixture<PageClientesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageClientesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageClientesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

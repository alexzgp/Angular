import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTransferenciasComponent } from './page-transferencias.component';

describe('PageTransferenciasComponent', () => {
  let component: PageTransferenciasComponent;
  let fixture: ComponentFixture<PageTransferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTransferenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTransferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

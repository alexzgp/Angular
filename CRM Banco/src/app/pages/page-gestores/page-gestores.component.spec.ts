import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGestoresComponent } from './page-gestores.component';

describe('PageGestoresComponent', () => {
  let component: PageGestoresComponent;
  let fixture: ComponentFixture<PageGestoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGestoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGestoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

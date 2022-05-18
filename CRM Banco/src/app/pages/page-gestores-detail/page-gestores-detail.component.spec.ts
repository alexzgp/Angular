import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGestoresDetailComponent } from './page-gestores-detail.component';

describe('PageGestoresDetailComponent', () => {
  let component: PageGestoresDetailComponent;
  let fixture: ComponentFixture<PageGestoresDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGestoresDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGestoresDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

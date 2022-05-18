import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGestoresCreateComponent } from './page-gestores-create.component';

describe('PageGestoresCreateComponent', () => {
  let component: PageGestoresCreateComponent;
  let fixture: ComponentFixture<PageGestoresCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGestoresCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGestoresCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageManagerDetailsComponent } from './page-manager-details.component';

describe('PageManagerDetailsComponent', () => {
  let component: PageManagerDetailsComponent;
  let fixture: ComponentFixture<PageManagerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageManagerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageManagerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

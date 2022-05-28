import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageManagersComponent } from './page-managers.component';

describe('PageManagersComponent', () => {
  let component: PageManagersComponent;
  let fixture: ComponentFixture<PageManagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageManagersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

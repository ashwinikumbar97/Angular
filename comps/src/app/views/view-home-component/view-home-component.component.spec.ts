import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHomeComponentComponent } from './view-home-component.component';

describe('ViewHomeComponentComponent', () => {
  let component: ViewHomeComponentComponent;
  let fixture: ComponentFixture<ViewHomeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHomeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

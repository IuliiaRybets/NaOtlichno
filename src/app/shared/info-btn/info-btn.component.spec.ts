import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBtnComponent } from './info-btn.component';

describe('InfoBtnComponent', () => {
  let component: InfoBtnComponent;
  let fixture: ComponentFixture<InfoBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

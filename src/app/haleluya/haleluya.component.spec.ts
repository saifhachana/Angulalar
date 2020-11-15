import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaleluyaComponent } from './haleluya.component';

describe('HaleluyaComponent', () => {
  let component: HaleluyaComponent;
  let fixture: ComponentFixture<HaleluyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaleluyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaleluyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

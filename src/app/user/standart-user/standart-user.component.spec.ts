import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandartUserComponent } from './standart-user.component';

describe('StandartUserComponent', () => {
  let component: StandartUserComponent;
  let fixture: ComponentFixture<StandartUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandartUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandartUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeTwoUtilityComponent } from './challenge-two-utility.component';

describe('ChallengeTwoUtilityComponent', () => {
  let component: ChallengeTwoUtilityComponent;
  let fixture: ComponentFixture<ChallengeTwoUtilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeTwoUtilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeTwoUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

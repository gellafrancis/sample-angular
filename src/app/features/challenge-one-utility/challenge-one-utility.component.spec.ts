import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeOneUtilityComponent } from './challenge-one-utility.component';

describe('ChallengeOneUtilityComponent', () => {
  let component: ChallengeOneUtilityComponent;
  let fixture: ComponentFixture<ChallengeOneUtilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeOneUtilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeOneUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

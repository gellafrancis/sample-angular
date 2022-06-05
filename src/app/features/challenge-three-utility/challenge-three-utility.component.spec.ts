import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeThreeUtilityComponent } from './challenge-three-utility.component';

describe('ChallengeThreeUtilityComponent', () => {
  let component: ChallengeThreeUtilityComponent;
  let fixture: ComponentFixture<ChallengeThreeUtilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeThreeUtilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeThreeUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

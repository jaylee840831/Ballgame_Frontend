import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAnalyzeComponent } from './game-analyze.component';

describe('GameAnalyzeComponent', () => {
  let component: GameAnalyzeComponent;
  let fixture: ComponentFixture<GameAnalyzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameAnalyzeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameAnalyzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

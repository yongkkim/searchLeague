import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerOnegameHistoryComponent } from './summoner-onegame-history.component';

describe('SummonerOnegameHistoryComponent', () => {
  let component: SummonerOnegameHistoryComponent;
  let fixture: ComponentFixture<SummonerOnegameHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummonerOnegameHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerOnegameHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

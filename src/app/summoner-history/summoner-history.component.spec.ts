import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerHistoryComponent } from './summoner-history.component';

describe('SummonerHistoryComponent', () => {
  let component: SummonerHistoryComponent;
  let fixture: ComponentFixture<SummonerHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummonerHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

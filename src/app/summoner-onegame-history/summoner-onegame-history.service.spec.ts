import { TestBed, inject } from '@angular/core/testing';

import { SummonerOnegameHistoryService } from './summoner-onegame-history.service';

describe('SummonerOnegameHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SummonerOnegameHistoryService]
    });
  });

  it('should be created', inject([SummonerOnegameHistoryService], (service: SummonerOnegameHistoryService) => {
    expect(service).toBeTruthy();
  }));
});

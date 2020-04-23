import { TestBed, inject } from '@angular/core/testing';

import { SummonerHistoryService } from './summoner-history.service';

describe('SummonerHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SummonerHistoryService]
    });
  });

  it('should be created', inject([SummonerHistoryService], (service: SummonerHistoryService) => {
    expect(service).toBeTruthy();
  }));
});

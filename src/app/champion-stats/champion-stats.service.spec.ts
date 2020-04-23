import { TestBed, inject } from '@angular/core/testing';

import { ChampionStatsService } from './champion-stats.service';

describe('ChampionStatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChampionStatsService]
    });
  });

  it('should be created', inject([ChampionStatsService], (service: ChampionStatsService) => {
    expect(service).toBeTruthy();
  }));
});

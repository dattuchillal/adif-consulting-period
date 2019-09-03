import { TestBed } from '@angular/core/testing';

import { ConsultingPeriodsService } from './consulting-periods.service';

describe('ConsultingPeriodsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultingPeriodsService = TestBed.get(ConsultingPeriodsService);
    expect(service).toBeTruthy();
  });
});

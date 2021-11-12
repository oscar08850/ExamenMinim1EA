import { TestBed } from '@angular/core/testing';

import { GrupoinvestigacionService } from './grupoinvestigacion.service';

describe('GrupoinvestigacionService', () => {
  let service: GrupoinvestigacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupoinvestigacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

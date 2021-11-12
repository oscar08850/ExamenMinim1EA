import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosGruposinvestigacionComponent } from './datos-gruposinvestigacion.component';

describe('DatosGruposinvestigacionComponent', () => {
  let component: DatosGruposinvestigacionComponent;
  let fixture: ComponentFixture<DatosGruposinvestigacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosGruposinvestigacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosGruposinvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

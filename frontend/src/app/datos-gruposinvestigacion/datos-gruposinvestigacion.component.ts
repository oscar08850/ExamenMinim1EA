import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GrupoInvestigacion } from '../models/grupoinvestigacion';

@Component({
  selector: 'app-datos-gruposinvestigacion',
  templateUrl: './datos-gruposinvestigacion.component.html',
  styleUrls: ['./datos-gruposinvestigacion.component.css']
})
export class DatosGruposinvestigacionComponent implements OnInit {

  @Input()
  grupoinvestigacion: GrupoInvestigacion;

  constructor(private router: Router) { }

  ngOnInit(): void {


    
  }

  modificar(){
    this.router.navigate(['/' + this.grupoinvestigacion.localizacion]);
  }

 
  

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GrupoInvestigacion } from '../models/grupoinvestigacion';
import { GrupoinvestigacionService } from '../services/grupoinvestigacion.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  grupos: GrupoInvestigacion[];
  constructor(private grupoService: GrupoinvestigacionService, private router: Router) { }

  ngOnInit(): void {
    this.grupoService.getGrupos().subscribe(data =>{
      this.grupos = data;
      console.log(this.grupos);
    })
  }

  nuevoGrupo(){
    this.router.navigateByUrl('/nuevogrupo');
  }

}

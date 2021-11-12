import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GrupoInvestigacion } from '../models/grupoinvestigacion';
import { User } from '../models/user';

import { GrupoinvestigacionService } from '../services/grupoinvestigacion.service';
import { UserService } from '../services/user.service';

//import { debug } from 'console';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  grupoinvestigacionForm: FormGroup;
  userForm: FormGroup;
  grupo: GrupoInvestigacion;
  user: User;
  id: String;
  constructor(private formBuilder: FormBuilder,private userService: UserService, private grupoService: GrupoinvestigacionService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.grupoService.getGrupo(this.id).subscribe(data =>{
      this.grupo = data;
      this.grupoinvestigacionForm = this.formBuilder.group({
        localizacion: [this.grupo.localizacion, [Validators.required, Validators.nullValidator]],
        fecha: [this.grupo.fecha, [Validators.required, Validators.nullValidator]],
        latitud: [this.grupo.latitud, [Validators.required, Validators.nullValidator]],
        longitud: [this.grupo.longitud, [Validators.required, Validators.nullValidator]],
        descripcion: [this.grupo.descripcion, [Validators.required, Validators.nullValidator]],
        nombre: ["dfasdf", [Validators.required, Validators.nullValidator]],
        id: ["hola", [Validators.required, Validators.nullValidator]],
        // dni: ["fasfsa", [Validators.required, Validators.nullValidator]],
        
        //users: [this.grupo.users, [Validators.required, Validators.nullValidator]]

      });
    })
  }

  get formControls(){
    return this.grupoinvestigacionForm.controls;
  }

  atras(){
    console.log("Hello");

    this.router.navigateByUrl('/principal');
  }  

  modificargrupo(){
    if(this.grupoinvestigacionForm.invalid){
      return;
    }
    
    const localizacion = this.grupoinvestigacionForm.value.localizacion;
    const fecha = this.grupoinvestigacionForm.value.fecha;
    const latitud = this.grupoinvestigacionForm.value.latitud;
    const longitud = this.grupoinvestigacionForm.value.longitud;
    const descripcion = this.grupoinvestigacionForm.value.descripcion;
    const users = this.grupoinvestigacionForm.value.users;


    const grupomodificado = {'localizacion': localizacion, 'fecha': fecha, 'latitud': latitud, 'longitud': longitud, 'descripcion': descripcion, 'users': users};
    this.grupoService.modificarGrupo(grupomodificado, this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.router.navigateByUrl('/principal');
    })
  }

  delete(){
    const id = this.grupoinvestigacionForm.value.id;
    console.log(id);
    this.grupoService.eliminarGrupo(id).subscribe(data =>{
      this.router.navigateByUrl('/principal');
    });
  }


  
  
  mostrar(){

    this.grupoService.getGrupo(this.id).subscribe(data =>{
    this.grupo = data;
    const id = this.grupo.users.id;
    //const id = users.id.;
    //const id = "123";
    console.log(id);


    this.userService.getUser(id).subscribe(data =>{
    this.router.navigateByUrl('/principal'); 
        
      });

    });
  }

}
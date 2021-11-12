import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MongoParseError } from 'mongodb';
import { GrupoinvestigacionService } from '../services/grupoinvestigacion.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-nuevogrupo',
  templateUrl: './nuevogrupo.component.html',
  styleUrls: ['./nuevogrupo.component.css']
})
export class NuevogrupoComponent implements OnInit {

  grupoinvestigacionForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private grupoService: GrupoinvestigacionService, private router: Router) { }

  ngOnInit(): void {
    this.grupoinvestigacionForm = this.formBuilder.group({
      localizacion: ['', [Validators.required, Validators.nullValidator]],
      fecha: ['', [Validators.required, Validators.nullValidator]],
      latitud: ['', [Validators.required, Validators.nullValidator]],
      longitud: ['', [Validators.required, Validators.nullValidator]],
      descripcion: ['', [Validators.required, Validators.nullValidator]],
      nombre: ['', [Validators.required, Validators.nullValidator]],
      id: ['', [Validators.required, Validators.nullValidator]],
      //dni: ['', [Validators.required, Validators.nullValidator]],
    });
  }

  get formControls(){
    return this.grupoinvestigacionForm.controls;
  }

  addgrupo(): void{ //BOTON AÑADIR/GUARDAR
    if(this.grupoinvestigacionForm.invalid){
      return;
    }
    const localizacion = this.grupoinvestigacionForm.value.localizacion;
    const fecha = this.grupoinvestigacionForm.value.fecha;
    const latitud = this.grupoinvestigacionForm.value.latitud;
    const longitud = this.grupoinvestigacionForm.value.longitud;
    const descripcion = this.grupoinvestigacionForm.value.descripcion;
    const nombre = this.grupoinvestigacionForm.value.nombre;
    //const direccion = this.grupoinvestigacionForm.value.direccion;
    const id = this.grupoinvestigacionForm.value.id;




    const users = {'nombre': nombre , 'id': id};
    console.log("Esto es users: " + users);
    const grupoinvestigacion = {'localizacion': localizacion, 'fecha': fecha, 'latitud': latitud, 'longitud': longitud, 'descripcion': descripcion, 'users': users};
    console.log("Esto es grupo Investigacion: " + grupoinvestigacion);

    this.userService.addUser(users).subscribe(data =>{
      
    })
    this.grupoService.addGrupo(grupoinvestigacion).subscribe(data =>{
      this.router.navigateByUrl('/principal');
    })
  }


  atras(){
    this.router.navigateByUrl('/principal');
  }

}

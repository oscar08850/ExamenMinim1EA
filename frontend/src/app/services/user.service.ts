import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //obtenir tots els grups GET ALL
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(environment.apiURL + "/users");
  }

  //obtenir un grup  GET ONE
  getUser(id: String): Observable<User>{
    return this.http.get<User>(environment.apiURL + "/users/" + id);
  }

  //afegir un grup
  addUser(nuevoUser: User): Observable<any>{
    return this.http.post<User>(environment.apiURL + '/users/new', nuevoUser);
  }



  /*
  //modificar un grup
  modificarGrupo(grupomodificado: User, id: String): Observable<any>{
    return this.http.put(environment.apiURL + "/gruposinvestigacion/update/" + id, grupomodificado);
  }

  //elminar un grup
  eliminarGrupo(id: String): Observable<any>{
    return this.http.delete<User>(environment.apiURL + "/gruposinvestigacion/"+ id);
    //return this.http.delete(this.apiURL+'/delete'+`/${id}`);
  }

  */
}

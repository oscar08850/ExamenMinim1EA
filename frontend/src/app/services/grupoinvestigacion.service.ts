import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GrupoInvestigacion } from '../models/grupoinvestigacion'

@Injectable({
  providedIn: 'root'
})
export class GrupoinvestigacionService {

  constructor(private http: HttpClient) { }

  //obtenir tots els grups
  getGrupos(): Observable<GrupoInvestigacion[]>{
    return this.http.get<GrupoInvestigacion[]>(environment.apiURL + "/gruposinvestigacion");
  }

  //obtenir un grup
  getGrupo(localizacion: String): Observable<GrupoInvestigacion>{
    return this.http.get<GrupoInvestigacion>(environment.apiURL + "/gruposinvestigacion/" + localizacion);
  }

  //afegir un grup
  addGrupo(nuevogrupo: GrupoInvestigacion): Observable<any>{
    return this.http.post(environment.apiURL + '/gruposinvestigacion/new', nuevogrupo);
  }

  //modificar un grup
  modificarGrupo(grupomodificado: GrupoInvestigacion, id: String): Observable<any>{
    return this.http.put(environment.apiURL + "/gruposinvestigacion/update/" + id, grupomodificado);
  }

  //elminar un grup
  eliminarGrupo(id: String): Observable<any>{
    return this.http.delete<GrupoInvestigacion>(environment.apiURL + "/gruposinvestigacion/"+ id);
    //return this.http.delete(this.apiURL+'/delete'+`/${id}`);
  }
}

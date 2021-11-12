import {User} from "./user";

export interface GrupoInvestigacion {
    localizacion: String;
    fecha: String;
    latitud: String;
    longitud: String;
    descripcion: String;
    users: User;
}
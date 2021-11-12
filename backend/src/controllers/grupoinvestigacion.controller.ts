import { Request, Response} from "express";
import { getAllJSDocTags } from "typescript";
import grupoinvestigacion from "../models/grupoinvestigacion";
//import grupoinvestigacion from "../models/grupoinvestigacion";
import GrupoInvestigacion from "../models/grupoinvestigacion"
import User from "../models/user"

/*
○ Formulario para añadir un grupo de investigación que ha desarrollado una
vacuna: nombre del grupo, descripción. Url, responsable del grupo

○ Listado de grupos de investigación

○ Edición de un grupo de investigación. (Esta funcionalidad es accesible desde el
listado)
*/

//obtenir tots els equips d'investigació
function getAll (req:Request, res:Response): void {
    GrupoInvestigacion.find({}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    })
}

//obtenir grup d'investigació
function getGrupoInvestigacion (req:Request, res:Response): void {
    GrupoInvestigacion.findOne({"localizacion":req.params.localizacion}).then((data)=>{
        let status: number = 200;
        console.log(req.params.localizacion);
        if(data==null) status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}



//afegir grup d'investigació
function newGrupoInvestigacion (req:Request, res:Response): void {
    const grupo = new grupoinvestigacion({
        "localizacion": req.body.localizacion,
        "fecha": req.body.fecha,
        "latitud": req.body.latitud,
        "longitud": req.body.longitud,
        "descripcion": req.body.descripcion,
    });


/*
    const grupo = new grupoinvestigacion({
        "localizacion": req.body.localizacion,
        "fecha": req.body.fecha,
        "latitud": req.body.latitud,
        "longitud": req.body.longitud,
        "descripcion": req.body.descripcion,
    });




    const grupo = new GrupoInvestigacion({
        "nombregrupo": req.body.nombregrupo,
        "id": req.body.id,
        "descripcion": req.body.descripcion,
        "responsable": req.body.responsable,
        "url": req.body.url,
        "users": user 
        
    });
    */
    
    console.log(req.body);
    grupo.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

//modificar grup d'investigació
function updateGrupoInvestigacion (req:Request, res:Response): void {
    const localizacion: String = req.body.localizacion;
    const fecha = req.params.fecha;
    const latitud = req.body.latitud;
    const longitud: String = req.body.longitud;
    const descripcion: String = req.body.descripcion;


    GrupoInvestigacion.update({"localizacion": localizacion}, {$set: {"localizacion": localizacion, "fecha": fecha, "latitud": latitud, "longitud": longitud, "descripcion": descripcion}}).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}

//Delete grup investigacion


function deleteGrupoinvestigacion(req:Request, res:Response): void {
    const { id } = req.params;
    GrupoInvestigacion.findOne({"id":req.params.id}).remove().exec();

}
export default { getAll, getGrupoInvestigacion, newGrupoInvestigacion, updateGrupoInvestigacion , deleteGrupoinvestigacion };
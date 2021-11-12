"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import grupoinvestigacion from "../models/grupoinvestigacion";
//import GrupoInvestigacion from "../models/grupoinvestigacion"
const user_1 = __importDefault(require("../models/user"));
/*
○ Formulario para añadir un grupo de investigación que ha desarrollado una
vacuna: nombre del grupo, descripción. Url, responsable del grupo

○ Listado de grupos de investigación

○ Edición de un grupo de investigación. (Esta funcionalidad es accesible desde el
listado)
*/
//obtenir tots els equips d'investigació
function getAll(req, res) {
    user_1.default.find({}).then((data) => {
        let status = 200;
        if (data == null)
            status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    });
}
//obtenir grup d'investigació
function getUser(req, res) {
    //618d6c23c1f5622380883875
    //User.findOne({"id":req.params.id}).then((data)=>{
    user_1.default.findOne({ "id": req.params.id }).then((data) => {
        let status = 200;
        if (data == null)
            status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
//afegir grup d'investigació
function newUser(req, res) {
    const user = new user_1.default({
        "nombre": req.body.nombre,
        //"direccion": req.body.direccion,
        "id": req.body.id,
    });
    console.log(req.body);
    user.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        console.log("error data = " + user);
        return res.status(500).json(err);
    });
}
//modificar grup d'investigació
/*
function updateGrupoInvestigacion (req:Request, res:Response): void {
    const nombregrupo: String = req.body.nombregrupo;
    const id = req.params.id;
    const nuevaid = req.body.id;
    const descripcion: String = req.body.descripcion;
    const responsable: String = req.body.responsable;
    const url: String = req.body.url;


    GrupoInvestigacion.update({"id": id}, {$set: {"nombregrupo": nombregrupo, "id": nuevaid, "descripcion": descripcion, "responsable": responsable, "url": url}}).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}

*/
//Delete grup investigacion
/*
function deleteGrupoinvestigacion(req:Request, res:Response): void {
    const { id } = req.params;
    GrupoInvestigacion.findOne({"id":req.params.id}).remove().exec();

}
*/
exports.default = { getAll, getUser, newUser };

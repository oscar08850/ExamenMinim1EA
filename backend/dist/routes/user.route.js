"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
//Rutes grupos investigación
/*
○ Formulario para añadir un grupo de investigación que ha desarrollado una
vacuna: nombre del grupo, descripción. Url, responsable del grupo
○ Listado de grupos de investigación
○ Edición de un grupo de investigación. (Esta funcionalidad es accesible desde el
listado)
*/
const router = express_1.Router();
router.get('/', user_controller_1.default.getAll);
router.get('/:id', user_controller_1.default.getUser);
router.post('/new', user_controller_1.default.newUser);
//router.put('/update/:id', grupoinvestigacionController.updateGrupoInvestigacion);
//router.delete('/delete/:id', grupoinvestigacionController.deleteGrupoinvestigacion);
//Exportem router x utilitzar rutes a app.ts
exports.default = router;

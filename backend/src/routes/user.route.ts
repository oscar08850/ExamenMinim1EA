import { Router } from "express"; 
import userController from '../controllers/user.controller'

//Rutes grupos investigación
/*
○ Formulario para añadir un grupo de investigación que ha desarrollado una
vacuna: nombre del grupo, descripción. Url, responsable del grupo
○ Listado de grupos de investigación
○ Edición de un grupo de investigación. (Esta funcionalidad es accesible desde el
listado)
*/
const router = Router();

router.get('/', userController.getAll);
router.get('/:id', userController.getUser);
router.post('/new',userController.newUser);
//router.put('/update/:id', grupoinvestigacionController.updateGrupoInvestigacion);
//router.delete('/delete/:id', grupoinvestigacionController.deleteGrupoinvestigacion);

//Exportem router x utilitzar rutes a app.ts
export default router;

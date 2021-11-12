"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const resultadoclinico_controller_1 = __importDefault(require("../controllers/resultadoclinico.controller"));
const router = express_1.Router();
router.get('/', resultadoclinico_controller_1.default.getAll);
router.get('/:id', resultadoclinico_controller_1.default.getResultadoClinico);
router.post('/new', resultadoclinico_controller_1.default.newResultadoClinico);
router.put('/update/:id', resultadoclinico_controller_1.default.updateResultadoClinico);
//Exportamos router para usar rutas en app.ts
exports.default = router;

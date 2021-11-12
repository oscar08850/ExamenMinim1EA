"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resultadoclinico_1 = __importDefault(require("../models/resultadoclinico"));
function getAll(req, res) {
    resultadoclinico_1.default.find({}).then((data) => {
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
function getResultadoClinico(req, res) {
    resultadoclinico_1.default.findOne({ "id": req.params.id }).then((data) => {
        let status = 200;
        if (data == null)
            status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
function newResultadoClinico(req, res) {
    const resultado = new resultadoclinico_1.default({
        "nombrepaciente": req.body.nombrepaciente,
        "id": req.body.id,
        "fecharesultado": req.body.fecharesultado,
        "resultado": req.body.resultado,
        "test": req.body.test
    });
    console.log(req.body);
    resultado.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
function updateResultadoClinico(req, res) {
    const nombrepaciente = req.body.nombrepaciente;
    const id = req.params.id;
    const nuevaid = req.body.id;
    const fecharesultado = req.body.fecharesultado;
    const resultado = req.body.resultado;
    const test = req.body.test;
    resultadoclinico_1.default.update({ "id": id }, { $set: { "nombrepaciente": nombrepaciente, "id": nuevaid, "fecharesultado": fecharesultado, "resultado": resultado, "test": test } }).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    });
}
exports.default = { getAll, getResultadoClinico, newResultadoClinico, updateResultadoClinico };

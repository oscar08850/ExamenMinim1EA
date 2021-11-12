"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const grupoinvestigacion_route_1 = __importDefault(require("./routes/grupoinvestigacion.route"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const app = express_1.default();
//port a variable de entorno y sino 3000
app.set('port', process.env.PORT || 3000);
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use('/gruposinvestigacion', grupoinvestigacion_route_1.default);
app.use('/users', user_route_1.default);
exports.default = app;

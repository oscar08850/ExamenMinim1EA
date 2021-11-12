import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from'body-parser';
import GrupoInvestigacionRoutes from './routes/grupoinvestigacion.route'
import Users from './routes/user.route'


const app = express();

//port a variable de entorno y sino 3000
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(bodyParser.json());

app.use('/gruposinvestigacion', GrupoInvestigacionRoutes);
app.use('/users', Users);


export default app;
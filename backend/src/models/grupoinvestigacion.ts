import mongoose, { Schema, Document} from 'mongoose';

//model grupoinvestigación


const grupoinvestigacionSchema = new Schema({
    localizacion: {
        type: String
    },
    fecha: {
        type: String
    },
    latitud: {
        type: String
    },
    longitud: {
        type: String
    },
    descripcion: {
        type: String
    },

    users: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      ],
    });

export interface IGrupoInvestigacion extends Document {
    localizacion: String;
    fecha: String;
    latitud: String;
    longitud: String;
    descripcion: String;
    users: "User";
}


export default mongoose.model<IGrupoInvestigacion>('GrupoInvestigacion', grupoinvestigacionSchema);
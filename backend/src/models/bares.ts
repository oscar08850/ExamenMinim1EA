import mongoose, { Schema, Document} from 'mongoose';

//model grupoinvestigación
const baresSchema = new Schema({
    nombregrupo: {
        type: String
    },
    id: {
        type: String
    },
    descripcion: {
        type: String
    },
    dueño: {
        type: String
    },
    url: {
        type: String
    }
    });

export interface IBares extends Document {
    nombregrupo: String;
    id: String;
    descripcion: String;
    dueño: String;
    url: String;
}

export default mongoose.model<IBares>('Bares', baresSchema);
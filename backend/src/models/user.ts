//import { Schema, model } from "mongoose";
import mongoose, { Schema, Document} from 'mongoose';


const UserSchema = new Schema({
  nombre: { type: String, required: true },
  //direccion: { type: String, required: true, lowercase: true},
  id: { type: String, required: true},
});

//export default model("User", UserSchema);
export interface IUser extends Document {
  nombre: String;
  //direccion: String;
  id: String;
}



export default mongoose.model<IUser>('User', UserSchema);
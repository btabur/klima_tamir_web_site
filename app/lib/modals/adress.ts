import mongoose from "mongoose";

const AdressSchema = new mongoose.Schema(
  {
    name: {type: String,required: true},
    city: {type: String,required: true},
    town: {type: String,required: true},
    mah: {type: String,required: true},
    description: {type: String,required: true},
    phone: {type: String,required: true},
    userId: {type: mongoose.Schema.Types.ObjectId,ref: "User",required: true},    
  }
);

const Adress = mongoose.models.Adress || mongoose.model("Adress", AdressSchema)


export default Adress;
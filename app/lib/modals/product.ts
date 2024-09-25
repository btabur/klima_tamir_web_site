import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {type: String,required: true},
    image: {type: String,required: true},
    description: {type: String,required: true},
    price: {type: Number,required: true},
    category: {type: mongoose.Schema.Types.ObjectId,ref: "Category",required: true},    
  }
);

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema)


export default Product;
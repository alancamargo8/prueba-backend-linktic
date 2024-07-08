import mongoose, { Schema, Document } from "mongoose";

interface IProduct extends Document {
  name: string;
  description?: string;
  price: number;
  category: string;
  stock: number;
  image: string;
}

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
  },
  stock: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
});

const model = mongoose.model("Product", productSchema);

export default model;

import { Schema, model, Document } from "mongoose";

interface IOrder extends Document {
  products: Array<{
    productId: Schema.Types.ObjectId;
    quantity: number;
  }>;
  totalAmount: number;
  status: string;
}

const orderSchema = new Schema<IOrder>(
  {
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

export default model<IOrder>("Order", orderSchema);

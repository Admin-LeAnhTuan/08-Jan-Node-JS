import mongoose, { Document, Model, Schema } from "mongoose";

export interface productDocument extends Document {
    name: string
    price: number
    isdelete: boolean
    order: number,
    category: mongoose.Types.ObjectId[],
}

export interface productModel extends Model<productDocument>{}


const ProductSchema = new Schema<productDocument, productModel>({
    name: {
        String,
    },
    price: {
        String,
    }, 
    isdelete: {
        type: Boolean,
        default: false
    },
    order: {
        type: Number,
    },
    category: [
        {
            type: mongoose.Types.ObjectId,
            ref: "products",
        }
    ]
})


export default mongoose.model<productDocument, productModel>("products", ProductSchema);
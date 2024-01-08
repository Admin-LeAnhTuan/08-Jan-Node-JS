import mongoose, { Document, Model, Schema } from "mongoose";

export interface categoryDocument extends Document {
    name: string,
    orders: number,
    product: mongoose.Types.ObjectId[],
    isdelete: boolean
}

export interface categoryModel extends Model<categoryDocument>{}


const categorySchema = new Schema<categoryDocument, categoryModel>({
    name: {
        type: String,
    },
    orders: {
        type: Number,
    },
    product: [
        {
          type: mongoose.Types.ObjectId,
          ref: "category",
          required: true
       },
    ],
    isdelete: {
        type: Boolean,
        default: false
    }
})


export default mongoose.model<categoryDocument, categoryModel>("category", categorySchema);
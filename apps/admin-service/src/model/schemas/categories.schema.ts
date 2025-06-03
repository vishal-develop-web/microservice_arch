import mongoose, { Model, Schema } from "mongoose";


interface Categories {
  category: string;
}


const categoriesSchema: Schema<Categories> = new Schema(
  {
    category: { type: String, required: true },
  },
  { timestamps: true }
);


const CategoriesModel: Model<Categories> = mongoose.model("Categories", categoriesSchema);

export default CategoriesModel;

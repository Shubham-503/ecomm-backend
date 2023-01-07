import mongoose from "mongoose"

const collectionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Collection name is required"],
      trim: true,
      maxLength: [120, "Collection name can't be more than 120 characters"]
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model("Collection", collectionSchema)
import { Schema, models, model } from 'mongoose'

const productSchema = new Schema(
  {
    title: String,
    description: String,
    price: Number,
    image: String,
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
)

export default models.Product || model('Product', productSchema)

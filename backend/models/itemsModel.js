const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name Should Be Mentioned"],
      trim: true,
      maxlength: [40, "A Item name must have less or equal to 40 characters"],
      minlength: [2, "A Item name must have more or equal to 2 characters"],
    },
    price: {
      type: Number,
      required: [true, "Price Should Be Mentioned"],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "Must Have Some Description"],
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    ratingsAverage: {
      type: Number,
      default: 0,
    },
    imageCover: {
      type: String,
      // required: [true, "Must Have Some Cover Img"],
    },
    category: {
      type: String,
      required: [true, "Must have a category"],
    },
    images: [String],
    itemsRemaining: { type: Number },
    locationsNotAvailable: [String],
    locationsOnlyAvailable: [String],
    // sellers: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;

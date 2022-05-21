const mongoose = require("mongoose");
const feedbackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    sellerinfo: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    productId: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    feedback: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Feedbacks", feedbackSchema);

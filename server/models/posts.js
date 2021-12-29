const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    text: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", PostSchema);

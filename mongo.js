const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/todo-page")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed");
  });

const newShema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("collection", newShema);

module.exports = collection;

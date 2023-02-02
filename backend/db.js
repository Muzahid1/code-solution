const mongoose = require("mongoose");
var username = encodeURIComponent("muzahid");
var password = encodeURIComponent("muzahidv");

const url = "mongodb://localhost:27017/Codesolution"
// const url = "mongodb+srv://muzahid:muzahidv@cluster0.hnipe.mongodb.net/developer?retryWrites=true&w=majority"
module.exports.connect = async () => {
 await mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};

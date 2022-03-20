import mongoose from "mongoose";

const DB = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("connected to db"))
    .catch((err) => console.log(err));
};

export default DB;

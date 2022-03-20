import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: String,
    required: true,
  },
  Dob: {
    type: Date,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  prefLocation: {
    type: Array,
    required: false,
  },
});

export default mongoose.model("User", UserSchema, "user");

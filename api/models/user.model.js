import mongoose from "mongoose";

// schemas are like rules which defines how data will be stored in the db
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
// we want to save time of creation and time of updation while adding new user, that's why added {timestamps: true}, we may need this information later

const User = mongoose.model("User", userSchema);

export default User;

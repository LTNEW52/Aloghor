import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
      trim: true,
      minLength: 4,
      maxLength: 40,
    },
    userName: {
      type: String,
      required: [true, "UserName is Required"],
      trim: true,
      unique: true,
      minLength: 4,
      maxLength: 20,
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      trim: true,
      unique: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please fill a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
      minLength: 6,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Users", userSchema);

export default User;

// So this is a user model. We have name,username,email and password. They have some properties in them. This are first stored in schema, which is equivalent to create table in sql.

// Then we call the model, which makes the table and then we can use the table.

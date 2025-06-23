import mongoose from "mongoose";
import User from "../../Models/user.model.js";
import bcyrptjs from "bcryptjs";

const signup = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { name, userName, email, password } = req.body;

    const existingUserName = await User.exists({ userName: userName });
    const existingEmail = await User.exists({ email: email });
    console.log(existingUserName, existingEmail);

    if (existingUserName || existingEmail) {
      if (existingUserName && existingEmail) {
        const error = new Error("Username and Email exists Already!");
        error.statusCode = 409;
        throw error;
      } else if (existingEmail) {
        const error = new Error("Email exists Already!");
        error.statusCode = 409;
        throw error;
      } else {
        const error = new Error("Username exists Already!");
        error.statusCode = 409;
        throw error;
      }
    }

    const salt = await bcyrptjs.genSalt(10); // generate salt
    const hashedPassword = await bcyrptjs.hash(password, salt); // gives hashed password

    await User.create([{ name, userName, email, password: hashedPassword }], {
      session,
    });
    await session.commitTransaction();
    await session.endSession();

    res.status(201).send({ success: true, message: "User successfully registered" });
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    next(error);
  }
};

export default signup;

// so here we are defining what signup suppose to do. first we are creating a mongodb session, so any error abort the session and dont make any commit.

// first we are deconstructing the objects. then we are checking if userName or email exists. Monogdb can use findone and then select to show just email and userName, but exists is more fast and just shows user.id.

// after that is error handling. Then password hasing with bcryptjs, making salt and hashing it. Then comes inserting the data into table, using User.create()

// Now comes commiting the transaction, ending the session and sends status from server.

// catch blocks catch any error happened during this. so when error happens, it stops the current transaction, and as well as current session, so nothing gets hampered. then we pass to the global errorhandler using next().

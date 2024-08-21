const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

// username, email, phonenumber, password, confirmpassword

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Username must be included"],
      trim: true,
      maxlength: [20, "Username must not exceed 15 characters"],
      minlength: [3, "Username must contain min 3 characters"],
    },
    role: {
      type: String,
      enum: ["user", "admin", "seller"],
      default: "user",
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      lower: true,
      required: [true, "Please Provide Email"],
      // TODO Validation
      validate: [validator.isEmail, "Incorrect Email"],
    },
    phoneNumber: {
      type: String,
      trim: true,
      required: [true, "Please Provide Phone Number"],
    },
    password: {
      type: String,
      required: [true, "Please Provide Password"],
      select: false,
    },
    confirmPassword: {
      type: String,
      required: [true, "Please Provide Confirm Password"],
      validate: {
        validator: function (val) {
          return this.password === val;
        },
        message: "Password Should be same",
      },
    },
    active: {
      type: Boolean,
      default: true,
    },
    lastPasswordChange: Date,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // If password was not modified return

  // bcrypt -> hashing algo

  this.password = await bcrypt.hash(this.password, 13);

  this.confirmPassword = undefined; //Delete password

  next();
});

userSchema.methods.isPasswordCorrect = async function (
  passwordEnterd,
  userPassword
) {
  return await bcrypt.compare(passwordEnterd, userPassword);
};

userSchema.methods.isPasswordChanged = function (jwtTimeStamp) {
  if (this.lastPasswordChange) {
    const changedAtTimeStamp = parseInt(
      this.lastPasswordChange.getTime() / 1000,
      10
    );
    return jwtTimeStamp < changedAtTimeStamp;
  }
  return false;
};

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;

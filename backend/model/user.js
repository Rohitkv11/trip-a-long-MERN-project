import mongoose from "mongoose";
import bcrypt from "bcrypt";
// eslint-disable-next-line no-unused-vars
import jwt from "jsonwebtoken";

const salt = 10;

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  phone_number: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin:{
    type:Boolean,
    default:false
  }
},
{timestamps:true}
);

// eslint-disable-next-line func-names
userSchema.pre("save", function (next) {
  const user = this;

  if (user.isModified("password")) {
    // eslint-disable-next-line no-shadow, consistent-return
    bcrypt.genSalt(salt, (err, salt) => {
      if (err) return next(err);

      // eslint-disable-next-line no-shadow, consistent-return
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        user.password2 = hash;
        next();
      });
    });
  } else {
    next();
  }
});

// eslint-disable-next-line func-names
userSchema.methods.comparepassword = function (password, cb) {
  // eslint-disable-next-line consistent-return
  bcrypt.compare(password, this.password, (err, isMatch) => {
    // eslint-disable-next-line no-undef
    if (err) return cb(next);
    cb(null, isMatch);
  });
};

userSchema.statics.login = async function (email, password) {
  console.log(email);
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("please enter correct password");
  }
  throw Error(" Email not registered");
};

const User = mongoose.model("User", userSchema);
export default User;

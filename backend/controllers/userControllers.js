import User from "../model/user.js";
import generateToken from "../utils/generateToken.js";
import twilio from "twilio";

const sid = process.env.SID;

const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  console.log(err);
  if (err.message === "incorrect email") {
    errors.email = "That email is not registered";
  }

  if (err.message === "incorrect password") {
    errors.password = "That password is incorrect";
  }

  if (err.code === 11000) {
    errors.email = "Email is already registered";
    return errors;
  }

  if (err.message.includes("Users validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

export const register = async (req, res) => {
  try {
    console.log("body", req.body);
    const { otp, phone_number, email, firstname, lastname, password,isAdmin } =
      req.body;
    console.log(otp, phone_number, email, firstname, lastname, password,isAdmin);
    let client = new twilio(`${process.env.SID}`, `${process.env.AUTH_TOKEN}`);

    const check = await client.verify
      .services("VA7b4a6b356c68697ab60f093dc6fd4621")
      .verificationChecks.create({ to: `+91${phone_number}`, code: otp });
    console.log(check.status);
    { check.status!="approved" && res.status(401).json({
      otpVerification: false,
      message: "otp entered is wrong please check your mobile number",
    });}
    if (check.status == "approved") {
      console.log("lkjhgfdfghjkl");
      const user = await User.create({
        firstname,
        lastname,
        email,
        phone_number,
        isAdmin,
        password,
      });
      const token = generateToken(user._id,user.isAdmin);

      res.status(201).json({ user: user._id, token, created: true });
    }
  } catch (error) {
    const errors = handleErrors(error);
    console.log(errors);
    // console.log(error);
  }
};

export const otpSent = async (req, res) => {
  try {
    console.log("sentotppppppppppp");
    console.log(req.body);
    const { email, phone_number } = req.body;
    const user = await User.findOne({
      $or: [{ email: email }, { phone_number: phone_number }],
    });
    if (user) {
      if (user.email === email) {
        return res.status(200).json({
          emailDuplicate: true,
          message: "user with email already exists",
        });
      } else {
        return res.status(200).json({
          phone_numberDuplicate: true,
          message: "user with phone no already exists",
        });
      }
    } else {
      console.log("twilioooooooooo");
      console.log(process.env.SID);
      // console.log(sid);
      let client = new twilio(
        `${process.env.SID}`,
        `${process.env.AUTH_TOKEN}`
      );
      await client.verify.v2.services
        .create({ friendlyName: "Trip A Long" })
        .then((service) => console.log(service.sid));
      await client.verify.v2
        .services("VA7b4a6b356c68697ab60f093dc6fd4621")
        .verifications.create({ to: `+91${phone_number}`, channel: "sms" })
        .then((verification) => console.log(verification.status));
      console.log("message successfully sent");
      res.status(200).json({ otpSent: true });
    }
  } catch (error) {
    console.log(error);
    res.status(502).json({ otp: "failed" });
  }
};

export const otpVerification = async (req, res) => {
  try {
    const { otp, phone_number } = req.body;
    console.log(otp, phone_number);
    let client = new twilio(sid, auth_token);

    const check = await client.verify
      .services("VAf4d3256836e30ae0b4dfc7f013fc7401")
      .verificationChecks.create({ to: `+91${phone_number}`, code: otp });
    console.log(check.status);
    res.status(200).json({ status: check.status });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email } = req.body;
    console.log(email);
    const pswrd = req.body.password
    console.log("emailll",pswrd);
    const user = await User.login(email, pswrd);
    console.log("user:",user);
    const token = generateToken(user._id,user.isAdmin);
    const { password,...others } = user._doc
    res.status(201).json({ user: others, token, created: true });
  } catch (error) {
    return res.status(500).json(error);
  }
};

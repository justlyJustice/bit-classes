import { setCookie } from "cookies-next";

import dbConnect from "@/utils/dbConnect";
import User from "@/models/User";

export default async function handler(req, res) {
  dbConnect();

  if (req.method === "POST") {
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).json({ message: "User already exists!" });
    }

    user = new User({
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
      isPaymentConfirmed: false,
      hasRegistered: true,
      payment: null,
    });
    await user.save();

    const options = {
      req,
      res,
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };

    if (process.env.NODE_ENV === "production") {
      options.secure = true;
    }

    setCookie("auth", JSON.stringify(user), options);
    res.status(201).json({
      success: true,
      message: "Registration successful!",
      data: user,
    });
  }

  if (req.method === "GET") {
    const users = await User.find().populate("payment");

    res.status(200).json({ success: true, data: users });
  }
}

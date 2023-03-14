import dbConnect from "@/utils/dbConnect";
import User from "@/models/User";
import setUserCookie from "@/utils/setUserCookie";

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
      phone: req.body.phone,
      isPaymentConfirmed: false,
      hasRegistered: true,
      payment: null,
    });
    await user.save();

    setUserCookie(user, req, res);

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

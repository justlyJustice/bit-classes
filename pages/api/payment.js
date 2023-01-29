import Payment from "@/models/Payment";
import { SK_KEY } from "@/config/paystack-key";

const paystack = require("paystack-api")(SK_KEY);

import dbConnect from "@/utils/dbConnect";
import User from "@/models/User";

export default async function handler(req, res) {
  dbConnect();

  if (req.method === "POST") {
    let user = await User.findOne({ email: req.body.email });

    if (!user) res.status(404).json({ message: "User not found" });

    if (user.isPaymentConfirmed)
      res.status(400).json({ message: "Payment already made" });

    const verification = await paystack.transaction.verify({
      reference: req.body.reference,
    });

    if (!verification) res.status(400).json({ message: "Verification failed" });

    let payment = new Payment({
      paidBy: user._id,
      reference: req.body.reference,
    });
    await payment.save();

    user.isPaymentConfirmed = true;
    user.payment = payment._id;
    await user.save();

    res
      .status(200)
      .json({ success: true, message: "Payment verified and completed" });
  }
}

// import connectDB from "../../../lib/mongodb"; // ✅ Ensure this is correctly imported
// import connectDB from "../../../lib/mongodb";
import { connectDB } from "../../../lib/mongodb";
import User from "../../../models/User";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  const { email, password } = req.body;
  console.log(email,password)
  try {
    await connectDB(); // ✅ This should now work

    // const user = await User.findOne({ email });
    const user = await User.findOne({ email }).select("+password");

    console.log(user)
    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }

    const isMatch = await user.comparePassword(password);
    console.log(isMatch)
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }

    const token = user.generateAuthToken();

    res.status(200).json({
      user:user,
      success: true,
      message: "Login successful",
      token,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

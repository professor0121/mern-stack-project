import { connectDB } from "../../../lib/mongodb";
import ServiceProvider from "../../../models/ServiceProvider";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  const { email, password } = req.body;

  try {
    await connectDB();

    // Find service provider by email
    const provider = await ServiceProvider.findOne({ email }).select("+password");
    if (!provider) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }

    // Check password
    const isMatch = await provider.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }

    // Generate token
    const token = provider.generateAuthToken();

    res.status(200).json({
      success: true,
      provider:provider,
      message: "Login successful",
      token,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

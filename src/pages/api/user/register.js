import { connectDB } from "../../../lib/mongodb";
import User from "../../../models/User";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    try {
      const { name, email, password, role } = req.body;

      // Check if all fields exist
      if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: "All fields are required!" });
      }

      // Validate email format
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ success: false, message: "Invalid email format!" });
      }

      // Validate password length
      if (password.length < 6) {
        return res.status(400).json({ success: false, message: "Password must be at least 6 characters long!" });
      }

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ success: false, message: "User already exists!" });
      }

      // Create and save user
      const newUser = await User.create({ name, email, password, role });

      // Generate Token using model method
      const token = newUser.generateAuthToken();

      res.status(201).json({ success: true, message: "User registered successfully!",user: newUser, token });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}

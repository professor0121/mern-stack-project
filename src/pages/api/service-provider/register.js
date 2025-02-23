import { connectDB } from "../../../lib/mongodb";
import ServiceProvider from "../../../models/ServiceProvider";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  const { name, email, password, phone, serviceType } = req.body;

  try {
    await connectDB();

    // Check if the email is already registered
    const existingProvider = await ServiceProvider.findOne({ email });
    if (existingProvider) {
      return res.status(400).json({ success: false, message: "Email already in use" });
    }

    // Create new service provider
    const newProvider = new ServiceProvider({ name, email, password, phone, serviceType });
    await newProvider.save();

    res.status(201).json({ success: true, message: "Registration successful" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}
// Compare this snippet from src/pages/api/service-provider/login.js:
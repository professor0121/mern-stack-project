import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const ServiceProviderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
      select: false, // Prevent password from being returned in queries
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    serviceType: {
      type: String,
      required: [true, "Service type is required"],
    },
  },
  { timestamps: true }
);

// Hash password before saving
ServiceProviderSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare password
ServiceProviderSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generate JWT Token
ServiceProviderSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    { serviceProviderId: this._id, email: this.email },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
};

export default mongoose.models.ServiceProvider || mongoose.model("ServiceProvider", ServiceProviderSchema);

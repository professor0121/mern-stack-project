import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState("");
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/service-provider/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message);

      localStorage.setItem("token", result.token);
      router.push("/provider-dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-700">Service Provider Login</h2>

        {error && <p className="text-red-500 text-center mt-2">{error}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <input {...register("email", { required: "Email is required" })} placeholder="Email"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400" />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}

          <input type="password" {...register("password", { required: "Password is required" })} placeholder="Password"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400" />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}

          <button type="submit" className="w-full bg-green-700 text-white py-2 rounded-lg">Login</button>
        </form>

        <p className="text-center mt-4 text-gray-700">Don't have an account? <Link href="/provider-register" className="text-blue-600">Register</Link></p>
        <div className="flex justify-center mt-4">
            <p className="text-gray-700 pr-4"> Login as a User </p>
            <Link href="/login" className="text-blue-600">User Login</Link>
        </div>
      </div>
    </div>
  );
}

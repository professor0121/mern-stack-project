import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ProviderRegister() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/service-provider/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message);

      alert("Registration successful!");
      router.push("/provider-login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-700">Service Provider Register</h2>

        {error && <p className="text-red-500 text-center mt-2">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input name="name" placeholder="Full Name" className="text-gray-700 w-full p-2 border rounded-lg" required />
          <input name="email" type="email" placeholder="Email" className="text-gray-700 w-full p-2 border rounded-lg" required />
          <input name="password" type="password" placeholder="Password" className="text-gray-700 w-full p-2 border rounded-lg" required />
          <input name="phone" placeholder="Phone Number" className="text-gray-700 w-full p-2 border rounded-lg" required />
          <input name="serviceType" placeholder="Service Type" className="text-gray-700 w-full p-2 border rounded-lg" required />
          <button type="submit" className="text-gray-700 w-full bg-green-700 text-white py-2 rounded-lg">Register</button>
        </form>

        <p className="text-center mt-4 text-gray-700">Already have an account? <Link href="/provider-login" className="text-blue-600">Login</Link></p>
        <div className="flex justify-center mt-4">
            <p className="text-gray-700 pr-4">Register as a User</p>
            <Link href="/register" className="text-blue-600">Register as User</Link>
        </div>
      </div>
    </div>
  );
}

// Use getServerSideProps if you need to fetch authentication details
export async function getServerSideProps(context) {
  return { props: {} }; // Add authentication checks here if needed
}

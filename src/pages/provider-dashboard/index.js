import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { LogOut, LayoutDashboard, User, Briefcase } from "lucide-react"; // Icons
import Link from "next/link";

export default function ProviderDashboard() {
  const router = useRouter();
  const [provider, setProvider] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Fetch provider data (replace with API call)
    const providerData = { name: "John Doe", service: "Electrician" }; // Example data
    setProvider(providerData);

    // Check if provider is authenticated (Mock check)
    if (!providerData) {
      router.push("/provider-login");
    }
  }, []);

  const handleLogout = () => {
    // Clear authentication (Modify as needed)
    router.push("/provider-login");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-blue-600 w-64 p-6 fixed inset-y-0 left-0 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} transition duration-300 ease-in-out md:translate-x-0 md:relative`}>
        <h2 className="text-white text-2xl font-bold mb-6">Provider Panel</h2>
        <nav className="space-y-4">
          <Link href="/provider-dashboard" className="flex items-center text-white space-x-2 p-2 rounded-md hover:bg-blue-500">
            <LayoutDashboard className="w-5 h-5" /> <span>Dashboard</span>
          </Link>
          <Link href="/provider-services" className="flex items-center text-white space-x-2 p-2 rounded-md hover:bg-blue-500">
            <Briefcase className="w-5 h-5" /> <span>Services</span>
          </Link>
          <Link href="/provider-profile" className="flex items-center text-white space-x-2 p-2 rounded-md hover:bg-blue-500">
            <User className="w-5 h-5" /> <span>Profile</span>
          </Link>
          <button onClick={handleLogout} className="flex items-center text-white space-x-2 p-2 rounded-md hover:bg-red-500 w-full">
            <LogOut className="w-5 h-5" /> <span>Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center md:hidden">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-blue-600">☰</button>
          <h2 className="text-xl font-bold">Dashboard</h2>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6">
          <h2 className="text-3xl font-bold text-blue-600">Welcome, {provider?.name}</h2>
          <p className="text-gray-600 mt-2">Service: {provider?.service}</p>
          
          <div className="mt-6 grid gap-4 grid-cols-1 md:grid-cols-3">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-blue-600">Total Orders</h3>
              <p className="text-gray-600 text-2xl mt-2">12</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-blue-600">Earnings</h3>
              <p className="text-gray-600 text-2xl mt-2">$450</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-blue-600">New Requests</h3>
              <p className="text-gray-600 text-2xl mt-2">3</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

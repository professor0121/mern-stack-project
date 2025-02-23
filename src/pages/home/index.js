// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { isAuthenticated, logout } from "../../utils/auth";

// export default function Dashboard() {
//   const router = useRouter();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     if (!isAuthenticated()) {
//       router.push("/login");
//     } else {
//       setUser({ name: "User" }); // Replace with actual user data
//     }
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <h2 className="text-2xl font-bold text-blue-700">Welcome, {user?.name}</h2>
//       <button onClick={logout} className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg">
//         Logout
//       </button>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { isAuthenticated, logout } from "../../utils/auth";
import { Menu, LayoutDashboard, LogOut, User } from "lucide-react";
import Link from "next/link";
import Header from "../../components/User/header";
import UserHero from "@/components/User/useHero";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    } else {
      setUser({ name: "User" }); // Replace with actual user data
    }
  }, []);

  return (
    <div>
      <Header />
      <UserHero />
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      {/* <aside
        className={`bg-blue-700 text-white w-64 p-5 space-y-6 transition-all duration-300 ${
          isSidebarOpen ? "block" : "hidden md:block w-16"
        }`}
      >
        <div className="flex justify-between items-center">
          {isSidebarOpen && <h1 className="text-2xl font-bold">Dashboard</h1>}
          <button className="md:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu size={28} />
          </button>
        </div>
        <nav className="mt-10 space-y-4">
          <Link href="/dashboard" className="flex items-center space-x-2 p-3 rounded-md hover:bg-blue-800">
            <LayoutDashboard size={24} />
            {isSidebarOpen && <span>Home</span>}
          </Link>
          <Link href="/profile" className="flex items-center space-x-2 p-3 rounded-md hover:bg-blue-800">
            <User size={24} />
            {isSidebarOpen && <span>Profile</span>}
          </Link>
          <button
            onClick={() => {
              logout();
              router.push("/login");
            }}
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-red-600 w-full"
          >
            <LogOut size={24} />
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </nav>
      </aside> */}

      
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-bold text-blue-700">Welcome, {user?.name}</h2>
        <p className="mt-4 text-gray-600">This is your dashboard. Manage your content here.</p>
      </main>
    </div>
    </div>
  );
}

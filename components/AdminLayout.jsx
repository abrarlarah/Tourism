// components/AdminLayout.jsx
import { useRouter } from 'next/router';
import Link from 'next/link';


const AdminLayout = ({ children }) => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    router.push('/admin/login');
  };

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-white border-r border-gray-200 p-6">
        <h2 className="text-3xl font-bold text-yellow-500 mb-8">Admin Panel</h2>
        <nav className="space-y-4">
          <Link href="/admin/packages">
            <span className="block text-gray-700 hover:bg-yellow-500 hover:text-white p-2 rounded-lg transition duration-300 cursor-pointer">
              Manage Packages
            </span>
          </Link>
          <Link href="/admin/destinations">
            <span className="block text-gray-700 hover:bg-yellow-500 hover:text-white p-2 rounded-lg transition duration-300 cursor-pointer">
              Manage Destinations
            </span>
          </Link>
          <button
            onClick={handleLogout}
            className="mt-4 w-full bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Logout
          </button>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-gray-50">
        <div className="bg-white rounded-lg shadow-md p-6">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;

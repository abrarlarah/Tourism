// pages/admin/login.jsx
import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // Hard-coded credentials for demonstration (for better security, use environment variables or a database)
  const ADMIN_USERNAME = 'addam';
  const ADMIN_PASSWORD = 'addam';

  const handleLogin = (e) => {
    e.preventDefault();

    // Check credentials
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Store a simple authentication token in localStorage (not secure for production)
      localStorage.setItem('isAdmin', 'true');
      router.push('/admin'); // Redirect to the admin dashboard
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-white">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full border border-gray-200"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-yellow-500">
          Admin Login
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded mt-2 focus:outline-none focus:border-yellow-500"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded mt-2 focus:outline-none focus:border-yellow-500"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white p-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

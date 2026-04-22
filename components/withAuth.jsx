// components/withAuth.jsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const router = useRouter();

    useEffect(() => {
      const isAdmin = localStorage.getItem('isAdmin');
      if (!isAdmin) {
        router.push('/admin/login');
      }
    }, [router]); // ✅ Added 'router' to the dependency array

    return <WrappedComponent {...props} />;
  };

  // ✅ Added display name for better debugging
  AuthComponent.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return AuthComponent;
};

export default withAuth;

import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Login() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');
   const { login } = useAuth();
   const router = useRouter();

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
         await login(email, password);
         router.push('/dashboard');
      } catch (err) {
         setError('Login failed. Please check your credentials.');
      }
   };

   return (
      <div style={styles.container}>
            {/* Replace with your logo */}
            <img src="/path-to-your-logo.png" alt="ShopEZ Logo" style={styles.logo} />
         <h1 style={styles.heading}>Welcome to ShopEZ!</h1>
         <a href="/api/auth/login" style={styles.loginButton}>Login</a>
      </div>
   );
};

const styles = {
   container: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '85vh',
      backgroundColor: '#FFFFFF',
      fontFamily: 'Cambria'
   },
   logo: {
      width: '105px',
   },
   heading: {
      fontSize: '2.5rem',
      marginBottom: '20px',
      color: '#000000',
   },
   loginButton: {
      display: 'inline-block',
      padding: '12px 24px',
      fontSize: '1.3rem',
      color: '#FFFFFF',
      backgroundColor: '#663300',
      textDecoration: 'none',
      borderRadius: '8px',
   },
};
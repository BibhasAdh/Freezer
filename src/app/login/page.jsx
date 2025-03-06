'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        try {
            const response = await fetch('http://localhost/login.php', { // Ensure this URL is correct
                method: 'POST',
                body: formData
            });
            
            const data = await response.json();
            
            if (data.success) {
                // Store authentication token/data
                document.cookie = "auth=true";  // Use proper auth token
                router.push('/');
            } else {
                alert(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Failed to connect to login server');
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center">
            <form onSubmit={handleLogin} className="bg-black/30 p-8 rounded-lg w-96">
                <h1 className="text-2xl mb-6 text-center">Login to Music App</h1>
                
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 rounded bg-black/20 border border-gray-600"
                        required
                    />
                </div>
                
                <div className="mb-6">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 rounded bg-black/20 border border-gray-600"
                        required
                    />
                </div>
                
                <button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded"
                >
                    Login
                </button>

                <div className="mt-4 text-center">
                    <button 
                        type="button"
                        onClick={() => router.push('/register')}
                        className="text-blue-600 hover:underline"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
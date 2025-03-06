'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        try {
            const response = await fetch('http://localhost/music-app/register.php', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                alert('Registration successful');
                router.push('/login');
            } else {
                alert(data.message || 'Registration failed');
            }
        } catch (error) {
            console.error('Registration error:', error);
            alert('Failed to connect to registration server');
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center">
            <form onSubmit={handleRegister} className="bg-black/30 p-8 rounded-lg w-96">
                <h1 className="text-2xl mb-6 text-center">Register for Music App</h1>

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

                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 rounded bg-black/20 border border-gray-600"
                        required
                    />
                </div>

                <div className="mb-6">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full p-2 rounded bg-black/20 border border-gray-600"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;
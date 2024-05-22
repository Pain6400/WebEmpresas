// login.jsx
import React from 'react';
import { Button, Input, Label } from '@windmill/react-ui';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Aquí puedes agregar tu lógica de autenticación
        onLogin(); // Llamamos al callback para actualizar el estado de autenticación
        navigate('/'); // Usamos navigate en lugar de history.push
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
                <Label>
                    <span>Email</span>
                    <Input className="mt-1" type="email" placeholder="john@example.com" />
                </Label>
                <Label className="mt-4">
                    <span>Password</span>
                    <Input className="mt-1" type="password" placeholder="********" />
                </Label>
                <Button className="mt-6 w-full" onClick={handleLogin}>
                    Log in
                </Button>
            </div>
        </div>
    );
}

export default Login;

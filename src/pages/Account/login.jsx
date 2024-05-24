import React, { useState } from 'react';
import api from '../../components/axiosConfig';
import { Button, Input, Label } from '@windmill/react-ui';
import { useNavigate, NavLink } from 'react-router-dom';
import ImageLight from '../../assets/img/login-office.jpeg'
import ImageDark from '../../assets/img/login-office-dark.jpeg'
import { FaTwitter, FaGithub } from 'react-icons/fa';
function Login({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/login', { username, password });
      localStorage.setItem('token', response.data.token);
      onLogin();
      navigate('/');
    } catch (err) {
      console.error('Error logging in:', err);
      setError(err.response ? err.response.data.message : 'An unexpected error occurred.');
    }
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Login</h1>
              <Label>
                <span>Email</span>
                <Input className="mt-1" type="email" placeholder="john@doe.com" value={username} onChange={(e) => setUsername(e.target.value)} />
              </Label>

              <Label className="mt-4">
                <span>Password</span>
                <Input className="mt-1" type="password" placeholder="***************" value={password} onChange={(e) => setPassword(e.target.value)} />
              </Label>

              <Button className="mt-4" block layout="outline" onClick={handleLogin}>
                Log in
              </Button>

              <hr className="my-8" />

              <Button block layout="outline">
                <FaGithub size={20} />
                Github
              </Button>
              <Button className="mt-4" block layout="outline">
                <FaTwitter size={20} />
                Twitter
              </Button>

              <p className="mt-4">
                <NavLink
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/forgot-password"
                >
                  Forgot your password?
                </NavLink>
              </p>
              <p className="mt-1">
                <NavLink
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/create-account"
                >
                  Create account
                </NavLink>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Login;

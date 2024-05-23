import  { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/shared/Layout'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Login from './pages/Account/login'

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route
                        path="/"
                        element={isAuthenticated ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/login" />}
                    />
                    <Route path="products" element={<Products />} />
                </Route>
                <Route path="/register" element={<Register />} />
                <Route
                    path="/login"
                    element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/" />}
                />
            </Routes>
        </Router>
    );
}

export default App;

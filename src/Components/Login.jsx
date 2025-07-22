import React, { useState } from 'react';
import axios from 'axios';
import { Route, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './index.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${API}/users?Email=${email}&Password=${password}`);
      if (res.data.length > 0) {
        await axios.post(`${API}/logins`, {
          Email: email,
          loginTime: new Date().toISOString()
        });
        navigate('/home');
      } else {
        alert('Invalid email or password');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 maini">
      <div className="w-full max-w-md bg-blue-200 rounded-xl border-2 shadow-md p-8 space-y-6 img">
        <h2 className="text-2xl font-bold text-center text-white-800 text-white uppercase">Login</h2>
        <Form onSubmit={handleLogin} className="space-y-4">
          <Form.Group className="mb-3">
            <Form.Label  className="block text-sm font-medium text-white uppercase  mb-1">Email address</Form.Label>
            <Form.Control
              type="email"
              required
              placeholder="Email"
              className="w-full px-3 py-2 border-2 border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={e => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="block text-sm uppercase text-white font-medium  mb-1" htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              required
              placeholder="Password"
              className="w-full px-3 py-2 border-3 border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={e => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="d-flex justify-content-between align-items-center mb-3">
            <Form.Check type="checkbox" label="Remember me"   className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            <a href="#" className="text-sm">Forgot password?</a>
          </Form.Group>

          <Button type="submit" className="w-full flex justify-center py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" onClick={handleLogin}>Login</Button>
        </Form>

       <div className="flex items-center justify-center">
          <span className="w-full border-t border-gray-900"></span>
          <span className="px-6 text-sm font-bold text-gray-900">Or continue with</span>
          <span className="w-full border-t border-gray-900"></span>
        </div>

         <div className="flex space-x-4">
          <button className="flex-1 flex items-center justify-center border-2 border-gray-900 rounded-md py-2 hover:bg-gray-100">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2" />
            Google
          </button>
          <button className="flex-1 flex items-center justify-center border-2 border-gray-900 rounded-md py-2 hover:bg-gray-100">
            <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="w-5 h-5 mr-2" />
            GitHub
          </button>
        </div>

        <div className="text-center mt-3 login-link">
          Don’t have an account?{' '}
          <Button variant="link" onClick={() => navigate('/register')}>Register</Button> 
        </div>
      </div>
    </div>
  );
};

export default Login;

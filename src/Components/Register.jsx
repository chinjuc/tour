import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
// import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;
  const handleRegister = async () => {
    try {
      const res = await axios.get(`${API}/users?Email=${email}`);
      if (res.data.length > 0) {
        alert('User already exists');
      } else {
        await axios.post(`${API}/users`, {
          Name: name,
          Email: email,
          Password: password
        });
        alert('Registration successful!');
        navigate('/login');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 regi">
      <div className="w-full max-w-md bg-blue-200 rounded-xl border-2 shadow-md p-8 space-y-6 regini">
        <h2 className="text-2xl font-bold text-center text-gray-900 uppercase">Sign Up</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="block text-sm font-medium  uppercase mb-1">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              className="w-full px-3 py-2 border-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={e => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="block text-sm font-medium uppercase mb-1">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={e => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="block text-sm font-medium  uppercase mb-1">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={e => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button className="w-full flex justify-center py-2 px-4 text-white bg-pink-900 text-gray-900 font-semibold rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" onClick={handleRegister}>
            Sign Up
          </Button>
        </Form>

        <div className="text-center text-pink-900 mt-3 register-link">
          Already have an account?{' '}
          <Button variant="link" className='text-gray-900 uppercase' onClick={() => navigate('/login')}>Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Register;

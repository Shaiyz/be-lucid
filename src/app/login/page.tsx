'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const LoginPage: React.FC = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
     
      const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email) {
          setErrors((prevErrors) => ({ ...prevErrors, email: 'Email is required' }));
          return;
        }
        if (!password) {
          setErrors((prevErrors) => ({ ...prevErrors, password: 'Password is required' }));
          return;
        }
      };
    return (
        <div className=" bg-gray-100 flex bg-green-100 flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div>

            </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="text-center text-3xl font-extrabold text-gray-900">Account Login</h2>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={handleLogin}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`mt-1 block w-full border-gray-100 py-3 px-1 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="password" className="block font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`mt-1  w-full border-gray-300 py-3 px-1 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                      errors.password ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
                </div>
    
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Log in
                  </button>
                </div>
                <div className='text-md flex justify-end font-medium text-gray-500 hover:text-gray-700'> <Link href='/forget-password' >Forget password?</Link></div>
              </form>
            </div>
          </div>
        </div>
      );
}

export default LoginPage;

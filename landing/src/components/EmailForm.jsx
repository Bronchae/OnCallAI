import React, { useState } from 'react';
import { Alert } from './Alert';

export const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('success');
    setEmail('');
  };

  return (
    <div className="mt-8 max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email for early access"
          required
          className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#2C3E50] outline-none"
          aria-label="Email address for waitlist"
        />
        <button 
          type="submit"
          className="bg-[#2C3E50] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#34495E] transition-colors sm:px-8 shadow-lg"
        >
          Get Protected
        </button>
      </form>
      
      {status === 'success' && (
        <Alert type="success">
          Thank you! We'll notify you when OnCall AI launches.
        </Alert>
      )}
    </div>
  );
};

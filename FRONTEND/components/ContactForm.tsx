"use client";

import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      full_name: formData.get('full_name'),
      email_address: formData.get('email_address'),
      phone_number: formData.get('phone_number'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001'}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(result.error || 'Something went wrong');
      }
    } catch (error: any) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Failed to send message. Please try again.');
    }
  };

  return (
    <div className="flex-1">
      <form
        autoComplete="off"
        className="flex-1"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col sm:flex-row gap-8 mb-8">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Name"
              className="bg-[#efefef] text-primary-color py-5 px-6 w-full focus:shadow-lg outline-none border-b-2 border-transparent focus:border-primary-color transition-all duration-300"
              name="full_name"
              required
              disabled={status === 'loading'}
            />
          </div>
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-[#efefef] text-primary-color py-5 px-6 w-full focus:shadow-lg outline-none border-b-2 border-transparent focus:border-primary-color transition-all duration-300"
              name="phone_number"
              required
              disabled={status === 'loading'}
            />
          </div>
        </div>
        <div className="relative mb-8">
          <input
            type="email"
            placeholder="E-mail"
            className="bg-[#efefef] text-primary-color py-5 px-6 w-full focus:shadow-lg outline-none border-b-2 border-transparent focus:border-primary-color transition-all duration-300"
            name="email_address"
            required
            disabled={status === 'loading'}
          />
        </div>
        <div className="relative mb-8">
          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            className="bg-[#efefef] text-primary-color w-full py-5 px-6 focus:shadow-lg outline-none border-b-2 border-transparent focus:border-primary-color transition-all duration-300 resize-none"
            required
            disabled={status === 'loading'}
          ></textarea>
        </div>
        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="w-full bg-primary-color py-5 px-6 text-white font-bold tracking-widest hover:-translate-y-2 transition-transform duration-300 relative uppercase disabled:opacity-50 disabled:hover:translate-y-0"
        >
          {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
        </button>
        
        {status === 'success' && (
          <p className="mt-4 text-green-600 font-bold text-center animate-fade-in">
            Message sent successfully! We will get back to you soon.
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-600 font-bold text-center">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
}

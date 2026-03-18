"use client";

import React from 'react';

export default function ContactForm() {
  return (
    <form
      autoComplete="off"
      className="flex-1"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('full_name');
        const email = formData.get('email_address');
        const phone = formData.get('phone_number');
        const message = formData.get('message');
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AMessage: ${message}`;
        window.location.href = `mailto:rentfolioltd@gmail.com?subject=Inquiry from ${name}&body=${body}`;
      }}
    >
      <div className="flex flex-col sm:flex-row gap-8 mb-8">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Name"
            className="bg-[#efefef] text-primary-color py-5 px-6 w-full focus:shadow-lg outline-none border-b-2 border-transparent focus:border-primary-color transition-all duration-300"
            name="full_name"
            required
          />
        </div>
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Phone Number"
            className="bg-[#efefef] text-primary-color py-5 px-6 w-full focus:shadow-lg outline-none border-b-2 border-transparent focus:border-primary-color transition-all duration-300"
            name="phone_number"
            required
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
        />
      </div>
      <div className="relative mb-8">
        <textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          className="bg-[#efefef] text-primary-color w-full py-5 px-6 focus:shadow-lg outline-none border-b-2 border-transparent focus:border-primary-color transition-all duration-300 resize-none"
          required
        ></textarea>
      </div>
      <button type="submit" className="w-full bg-primary-color py-5 px-6 text-white font-bold tracking-widest hover:-translate-y-2 transition-transform duration-300 relative uppercase">
        SEND MESSAGE
      </button>
    </form>
  );
}

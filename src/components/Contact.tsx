import React from 'react';

export const Contact = () => {
  return (
    <div className="container mx-auto px-6 py-20 bg-gray-100 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
      <form
        action="https://formspree.io/f/{your_form_id}" // Replace with your form service URL
        method="POST"
        className="max-w-xl mx-auto space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

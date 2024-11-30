import React, { useState } from 'react';

export const Contact = () => {
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = new FormData(e.target as HTMLFormElement);

    try {
      const response = await fetch('https://formspree.io/f/mwpkwrag', {
        method: 'POST',
        body: form,
      });

      if (response.ok) {
        setFormStatus('Your message has been sent!');
      } else {
        setFormStatus('There was an issue sending your message. Please try again later.');
      }
    } catch (error) {
      setFormStatus('Error sending message. Please try again.');
    }
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} method="POST">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col mb-6">
              <label htmlFor="name" className="text-lg font-medium mb-2">Name</label>
              <input type="text" id="name" name="name" required className="border-2 border-gray-300 p-3 rounded-lg" />
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="email" className="text-lg font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" required className="border-2 border-gray-300 p-3 rounded-lg" />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="message" className="text-lg font-medium mb-2">Message</label>
            <textarea id="message" name="message" required className="border-2 border-gray-300 p-3 rounded-lg h-32"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Submit
          </button>
        </form>
        {formStatus && <p className="mt-4 text-center text-gray-700">{formStatus}</p>}
      </div>
    </section>
  );
};

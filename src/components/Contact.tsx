import React, { useState } from "react";

export const Contact = () => {
  const [formStatus, setFormStatus] = useState(""); // to handle success or error message

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const response = await fetch("https://formspree.io/f/mwpkwrag", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("Message sent successfully!");
      } else {
        setFormStatus("Error sending message. Please try again.");
      }
    } catch (error) {
      setFormStatus("Error sending message. Please try again.");
    }
  };

  return (
    <section id="contact" className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Contact Me</h2> {/* Updated title color */}
      <form
        onSubmit={handleSubmit}
        method="POST"
        action="https://formspree.io/f/mwpkwrag"
        className="max-w-xl mx-auto"
      >
        <div className="mb-6">
          <label htmlFor="name" className="block text-lg font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-lg font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-lg font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
            rows="6"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700" // Updated button color
        >
          Send Message
        </button>
      </form>

      {formStatus && (
        <div className="mt-6 text-center text-lg font-semibold">
          {formStatus}
        </div>
      )}
    </section>
  );
};


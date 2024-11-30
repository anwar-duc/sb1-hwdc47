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
    <section
      id="contact"
      className="container mx-auto px-6 py-20 bg-white dark:bg-gray-800"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-teal-600 dark:text-teal-400">
        Contact Me
      </h2>
      <form
        onSubmit={handleSubmit}
        method="POST"
        action="https://formspree.io/f/mwpkwrag"
        className="max-w-xl mx-auto"
      >
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700 dark:text-gray-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700 dark:text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-lg font-medium text-gray-700 dark:text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            rows="6"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all"
        >
          Send Message
        </button>
      </form>

      {formStatus && (
        <div className="mt-6 text-center text-lg font-semibold text-teal-600 dark:text-teal-400">
          {formStatus}
        </div>
      )}
    </section>
  );
};



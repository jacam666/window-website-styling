"use client";

import React from 'react';

export default function Contact() {
    const [submissionMessage, setSubmissionMessage] = React.useState("");
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "2dcede50-807f-4105-b537-2481a15ebeec");
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result)
            form.reset();
            setSubmissionMessage("Message sent successfully!");
            // Clear the message after 3 seconds
            setTimeout(() => setSubmissionMessage(""), 3000);
        } else {
            setSubmissionMessage("Something went wrong. Please try again.");
            setTimeout(() => setSubmissionMessage(""), 3000);
        }
    }

    return (
        <div className="flex justify-center max-w-xs  p-12 bg-gray-100 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-gray-900"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition-colors"
                >
                    Submit Form
                </button>
            </form>
            {submissionMessage && (
        <div className="fixed bottom-4 right-4 py-2 px-4 bg-green-100 text-green-700 text-sm rounded shadow z-50">
                    {submissionMessage}
                </div>
            )}
        </div>

    );
}

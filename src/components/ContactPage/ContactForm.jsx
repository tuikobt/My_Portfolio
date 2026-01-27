import React, { useState } from "react";
import { formattedDate } from "../../utils/formattedDate";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    date: formattedDate,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-slate-950/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-l-lg">
      <div className="space-y-6">
        <div>
          <label className="block text-slate-400 text-sm mb-2 font-mono">
            _name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-slate-900/80 border border-slate-700 rounded px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 transition-colors font-mono"
            placeholder=""
          />
        </div>
        <div>
          <label className="block text-slate-400 text-sm mb-2 font-mono">
            _email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-slate-900/80 border border-slate-700 rounded px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 transition-colors font-mono"
            placeholder=""
          />
        </div>
        <div>
          <label className="block text-slate-400 text-sm mb-2 font-mono">
            _message:
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            className="w-full bg-slate-900/80 border border-slate-700 rounded px-4 py-3 text-slate-400 focus:outline-none focus:border-blue-500 transition-colors font-mono resize-none"
            placeholder="your message here..."
          />
        </div>

        <button
          id="sendBtn"
          className="bg-slate-700/60 hover:bg-slate-600/60 text-slate-300 px-6 py-2 rounded text-sm transition-colors font-mono"
        >
          submit-message
        </button>
      </div>
    </div>
  );
};
export default ContactForm;

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const CodeLine = ({ number, children }) => (
    <div className="flex leading-6">
      <span className="text-[#607B96] w-12 shrink-0 text-left pl-2 select-none">
        {number}
      </span>
      <div className="flex-1">{children}</div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full">
      <div className="flex items-center justify-center p-8 border-r border-[#1E2D3D]">
        <div className="w-full max-w-md space-y-6">
          <div>
            <label className="block text-sm mb-2 text-[#607B96]">_name:</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#011221] border border-[#1E2D3D] rounded px-4 py-2 text-slate-300 focus:border-[#607B96] outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm mb-2 text-[#607B96]">_email:</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#011221] border border-[#1E2D3D] rounded px-4 py-2 text-slate-300 focus:border-[#607B96] outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm mb-2 text-[#607B96]">
              _message:
            </label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[#011221] border border-[#1E2D3D] rounded px-4 py-2 text-[#607B96] focus:border-[#607B96] outline-none resize-none transition-colors"
              placeholder="Your message..."
            />
          </div>
          <button
            className={`text-[#010C15] px-4 py-2 rounded-lg text-sm transition-all ${formData.name && formData.email && formData.message ? " bg-[#FEA55F] hover:bg-[#ffb67f]" : "bg-[#1C2B3A]"}`}
          >
            submit-message
          </button>
        </div>
      </div>

      <div className="hidden lg:block p-8 font-mono text-[14px] overflow-y-auto">
        <div className="space-y-0.5">
          <CodeLine number="1">
            <span className="text-[#C982F7]">const</span>{" "}
            <span className="text-[#5565E8]">button</span>{" "}
            <span className="text-[#C982F7]">=</span>{" "}
            <span className="text-[#5565E8]">document</span>
            <span className="text-[#607B96]">.</span>
            <span className="text-[#FEA55F]">querySelector</span>
            <span className="text-[#607B96]">(</span>
            <span className="text-[#E99287]">'#sendBtn'</span>
            <span className="text-[#607B96]">);</span>
          </CodeLine>
          <CodeLine number="2" />
          <CodeLine number="3">
            <span className="text-[#C982F7]">const</span>{" "}
            <span className="text-[#5565E8]">message</span>{" "}
            <span className="text-[#C982F7]">=</span>{" "}
            <span className="text-[#607B96]">{"{"}</span>
          </CodeLine>
          <CodeLine number="4">
            <span className="ml-6 text-[#5565E8]">name</span>
            <span className="text-[#607B96]">:</span>{" "}
            <span className="text-[#E99287]">"{formData.name}"</span>
            <span className="text-[#607B96]">,</span>
          </CodeLine>
          <CodeLine number="5">
            <span className="ml-6 text-[#5565E8]">email</span>
            <span className="text-[#607B96]">:</span>{" "}
            <span className="text-[#E99287]">"{formData.email}"</span>
            <span className="text-[#607B96]">,</span>
          </CodeLine>
          <CodeLine number="6">
            <div className="flex flex-wrap ml-6">
              <span className="text-[#5565E8]">message</span>
              <span className="text-[#607B96]">:</span>{" "}
              <span className="text-[#E99287] break-all lg:break-words whitespace-pre-wrap">
                "{formData.message}"
              </span>
              <span className="text-[#607B96]">,</span>
            </div>
          </CodeLine>
          <CodeLine number="7">
            <span className="ml-6 text-[#5565E8]">date</span>
            <span className="text-[#607B96]">:</span>{" "}
            <span className="text-[#E99287]">"{formData.date}"</span>
          </CodeLine>
          <CodeLine number="8">
            <span className="text-[#607B96]">{"}"}</span>
          </CodeLine>
          <CodeLine number="9" />
          <CodeLine number="10">
            <span className="text-[#5565E8]">button</span>
            <span className="text-[#607B96]">.</span>
            <span className="text-[#FEA55F]">addEventListener</span>
            <span className="text-[#607B96]">(</span>
            <span className="text-[#E99287]">'click'</span>
            <span className="text-[#607B96]">, ()</span>{" "}
            <span className="text-[#C982F7]">=&gt;</span>{" "}
            <span className="text-[#607B96]">{"{"}</span>
          </CodeLine>
          <CodeLine number="11">
            <span className="ml-6 text-[#5565E8]">form</span>
            <span className="text-[#607B96]">.</span>
            <span className="text-[#FEA55F]">send</span>
            <span className="text-[#607B96]">(</span>
            <span className="text-[#5565E8]">message</span>
            <span className="text-[#607B96]">);</span>
          </CodeLine>
          <CodeLine number="12">
            <span className="text-[#607B96]">{"})"}</span>
          </CodeLine>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

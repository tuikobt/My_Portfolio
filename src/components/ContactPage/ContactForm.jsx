/*import React, { useState } from "react";
import { formattedDate } from "../../utils/formattedDate";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    date: formattedDate,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "VITE_SERVICE_ID",
        "VITE_TEMPLATE_ID",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "VITE_PUBLIC_KEY",
      );

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Send failed!");
    } finally {
      setLoading(false);
    }
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
            {loading ? "sending..." : "submit-message"}
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

export default ContactForm;*/
import React, { useState } from "react";
import { formattedDate } from "../../utils/formattedDate";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    date: formattedDate,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          date: formData.date,
        },
        import.meta.env.VITE_PUBLIC_KEY,
      );

      setSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "", date: formattedDate });
    setSuccess(false);
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
        {!success ? (
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
            <div>
              <label className="block text-sm mb-2 text-[#607B96]">
                _name:
              </label>
              <input
                name="name"
                required
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#011221] border border-[#1E2D3D] rounded px-4 py-2 text-slate-300 focus:border-[#607B96] outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-[#607B96]">
                _email:
              </label>
              <input
                name="email"
                required
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
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#011221] border border-[#1E2D3D] rounded px-4 py-2 text-[#607B96] focus:border-[#607B96] outline-none resize-none transition-colors"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`text-[#010C15] px-4 py-2 rounded-lg text-sm transition-all ${
                formData.name && formData.email && formData.message
                  ? "bg-[#FEA55F] hover:bg-[#ffb67f] cursor-pointer"
                  : "bg-[#1C2B3A] cursor-not-allowed text-[#607B96]"
              }`}
              onSubmit={handleSubmit}
            >
              {loading ? "sending..." : "submit-message"}
            </button>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <h2 className="text-white text-2xl font-medium">Thank you! 🤘</h2>
            <p className="text-[#607B96]">
              Your message has been accepted. You will receive answer really
              soon!
            </p>
            <button
              onClick={handleReset}
              className="text-[#010C15] bg-[#FEA55F] px-4 py-2 rounded-lg text-sm hover:bg-[#ffb67f] transition-colors"
            >
              send-new-message
            </button>
          </div>
        )}
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

import { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus('Please populate all entry values.');
      return;
    }

    setIsSubmitting(true);
    setStatus('Pipeline active: Dispatching message payload...');

    const formData = new FormData();
    formData.append("access_key", "6cc3109c-390f-444c-ba56-ee02b209edcd"); 
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("subject", form.subject);
    formData.append("message", form.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('Message successfully dispatched directly to inbox!');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('API Error: System rejected payload transmission.');
      }
    } catch (error) {
      setStatus('Network Error: Failed to clear network pathway.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    /* FIX: Changed bg-[#121416] to bg-transparent so the global dark stone 
       fracture texture matches About.jsx seamlessly without any breaks.
    */
    <section id="contact" className="py-24 bg-transparent text-stone-200 transition-colors relative overflow-hidden">
      
      {/* Soft integrated background mineral highlight layers */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/[0.01] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12 relative z-10">
        
        {/* Left Side: Contact Information */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-4xl font-serif font-normal text-white tracking-tight">
              Let's Connect
            </h2>
            <p className="mt-4 text-sm text-stone-400 leading-relaxed">
              Reach out for collaborations, backend opportunities, or software discussions.
            </p>
          </div>

          <div className="space-y-4">
            {/* Cards use structural mineral tiles to sit nicely on top of the background flow */}
            <div className="flex items-center space-x-4 p-4 rounded-xl bg-[#1a1d20]/90 border border-white/10 backdrop-blur-md shadow-lg">
              <FaMapMarkerAlt className="text-white" size={20} />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-stone-500">Location</p>
                <p className="text-sm font-semibold text-stone-300">Bihar, India</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 rounded-xl bg-[#1a1d20]/90 border border-white/10 backdrop-blur-md shadow-lg">
              <FaEnvelope className="text-white" size={20} />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-stone-500">Email Address</p>
                <p className="text-sm font-semibold text-stone-300">zeeshananjum623@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Deep Textured Block Contact Form Container */}
        <div className="lg:col-span-3 p-8 bg-[#1a1d20]/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#121416]/90 text-sm border border-white/10 focus:border-white/30 focus:outline-none focus:ring-0 text-white placeholder-stone-500 transition-all"
              />
              <input
                type="type"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#121416]/90 text-sm border border-white/10 focus:border-white/30 focus:outline-none focus:ring-0 text-white placeholder-stone-500 transition-all"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              required
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#121416]/90 text-sm border border-white/10 focus:border-white/30 focus:outline-none focus:ring-0 text-white placeholder-stone-500 transition-all"
            />
            <textarea
              placeholder="Message"
              rows={4}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#121416]/90 text-sm border border-white/10 focus:border-white/30 focus:outline-none focus:ring-0 text-white placeholder-stone-500 transition-all"
            />
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-3 bg-white hover:bg-stone-100 text-black text-sm font-semibold rounded-xl transition-all duration-300 shadow-md active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {status && (
              <p className="text-xs font-medium text-center text-stone-400 mt-2 tracking-wide">
                {status}
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
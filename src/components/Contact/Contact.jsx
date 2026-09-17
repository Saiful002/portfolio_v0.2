'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, Copy, Loader2, AlertCircle, RefreshCw } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { personalDetails } from '@/data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

    const isRealConfig =
      serviceId &&
      templateId &&
      publicKey &&
      !serviceId.includes('your_') &&
      !templateId.includes('your_') &&
      !publicKey.includes('your_');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || 'New Inquiry from Portfolio',
      message: formData.message,
      to_name: personalDetails.name,
    };

    try {
      if (isRealConfig) {
        // Send actual email via EmailJS API
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      } else {
        // Simulate network delay for demo mode when placeholders are present
        await new Promise((resolve) => setTimeout(resolve, 800));
        console.log('[EmailJS Demo Mode] Form submitted successfully. Configure real keys in .env.local to send live emails.');
      }
      setFormSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      const errText = error?.text || error?.message || 'An unexpected error occurred.';
      console.error('EmailJS Error:', errText);

      if (errText.includes('g-recaptcha-response') || errText.includes('reCAPTCHA')) {
        setErrorMessage(
          'EmailJS reCAPTCHA error: EmailJS dashboard a Apnar Template settings theke "reCAPTCHA Verification" OFF/Disable koredin.'
        );
      } else {
        setErrorMessage(`Failed to send email: ${errText}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative p-5 sm:p-8 rounded-3xl bg-[#12141a]/90 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-6 sm:gap-8 w-full max-w-full box-border">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <div className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
          Get In Touch
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Contact <span className="text-gradient-silver">Me</span>
        </h2>
        <div className="w-16 h-1 bg-accent rounded-full mt-1" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Info Column */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="p-4 sm:p-5 rounded-2xl card-hover-effect flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-center text-accent">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-[#8c9aa7]">Direct Email</p>
              <h3 className="text-xs sm:text-sm font-bold text-white mt-0.5 break-all">{personalDetails.email}</h3>
            </div>
            <button
              onClick={handleCopyEmail}
              className="w-full py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-white hover:border-accent transition-all flex items-center justify-center gap-1.5"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                  <span className="text-accent">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-accent" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl card-hover-effect flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-center text-accent shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-[#8c9aa7]">Location</p>
              <h3 className="text-xs sm:text-sm font-bold text-white mt-0.5">{personalDetails.location}</h3>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="md:col-span-7 p-5 sm:p-6 rounded-2xl card-hover-effect">
          <h3 className="text-base sm:text-lg font-bold text-white mb-4">Send a Message</h3>

          <AnimatePresence mode="wait">
            {formSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-8 flex flex-col items-center text-center gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent shadow-[0_0_20px_var(--accent-glow)]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-xl font-bold text-white">Thank You!</h4>
                  <p className="text-[#8c9aa7] text-xs max-w-sm">
                    Your message has been sent successfully. I will get back to you as soon as possible.
                  </p>
                </div>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs font-semibold hover:border-accent transition-all flex items-center gap-1.5 mt-2"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-accent" />
                  <span>Send Another Message</span>
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-3.5"
              >
                {errorMessage && (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#8c9aa7] mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#8c9aa7] mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your email address"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-[#8c9aa7] mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Shopify Store Development / Next.js Project"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-[#8c9aa7] mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your project inquiry..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors text-xs resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-accent text-[#08090b] font-bold text-xs tracking-wider uppercase shadow-md hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-1.5 mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Email...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

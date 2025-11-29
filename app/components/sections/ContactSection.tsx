'use client';

import { Container } from '../ui/Container';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    websiteType: 'web-development',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-text-primary/70">
            Any question or remarks? Just write us a message!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-0 bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Left Panel - Contact Information */}
            <div className="md:col-span-2 bg-brand-blue-600 text-white p-8 md:p-12 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-white">Contact Information</h3>
                <p className="text-white/80 mb-12">
                For inquiries regarding the community, events, or collaboration opportunities.
                </p>

                <div className="space-y-6">
            

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <span>hello@exposureai.org</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Worldwide</span>
                  </div>
                </div>

              
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-2 right-7 w-32 h-32 rounded-full bg-accent-peach/30 blur-2xl"></div>
              <div className="absolute bottom-5 right-7 w-24 h-24 rounded-full bg-accent-peach/40"></div>
            </div>

            {/* Right Panel - Contact Form */}
            <div className="md:col-span-3 p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                       Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-brand-blue-600 focus:ring-0 outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-brand-blue-600 focus:ring-0 outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Linkedin Profile
                  </label>
                  <input
                    type="text"
                    name="linkedin"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-brand-blue-600 focus:ring-0 outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={2}
                    className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-brand-blue-600 focus:ring-0 outline-none resize-none transition-colors"
                    required
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-brand-blue-600 text-white rounded-lg hover:bg-brand-blue-500 transition-colors font-medium"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

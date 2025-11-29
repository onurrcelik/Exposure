'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../components/ui/Button';

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedin: '',
    background: '',
    motivation: '',
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Video Background with Info */}
      <div className="hidden lg:flex lg:w-1/2 p-12 flex-col justify-between relative overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/liquid-gradient.mp4" type="video/mp4" />
        </video>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10">

          <div className="text-white">
            <p className="text-lg mb-4 opacity-90">Join the network</p>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Connect with Elite Turkish AI Talent Worldwide
            </h1>
            <p className="text-xl opacity-90 max-w-md">
              Join a selective community of engineers and founders building the next generation of AI companies.
            </p>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="relative z-10">
          <p className="text-white/70 text-sm mb-4">Our members come from</p>
          <div className="flex items-center gap-8 flex-wrap">
            <div className="text-white/80 text-sm font-medium">Y Combinator</div>
            <div className="text-white/80 text-sm font-medium">Stanford</div>
            <div className="text-white/80 text-sm font-medium">MIT</div>
            <div className="text-white/80 text-sm font-medium">Meta</div>
            <div className="text-white/80 text-sm font-medium">Google</div>
          </div>
        </div>
      </div>

      {/* Right Side - Application Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-8">
            <Link href="/">
              <Image
                src="/logos/exposure-logo-transparent.png"
                alt="Exposure Logo"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-text-primary mb-2">Apply Now</h2>
            <p className="text-text-primary/60">
              Please fill out the form to join our community.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-blue-600 focus:ring-0 outline-none transition-colors"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="workmail@gmail.com"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-blue-600 focus:ring-0 outline-none transition-colors"
                required
              />
            </div>

            {/* LinkedIn Profile */}
            <div>
              <label htmlFor="linkedin" className="block text-sm font-medium text-text-primary mb-2">
                LinkedIn Profile
              </label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/yourprofile"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-blue-600 focus:ring-0 outline-none transition-colors"
                required
              />
            </div>

            {/* Background */}
            <div>
              <label htmlFor="background" className="block text-sm font-medium text-text-primary mb-2">
                Professional Background
              </label>
              <textarea
                id="background"
                name="background"
                value={formData.background}
                onChange={handleChange}
                placeholder="Tell us about your current role, company, and areas of expertise..."
                rows={3}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-blue-600 focus:ring-0 outline-none resize-none transition-colors"
                required
              />
            </div>

            {/* Motivation */}
            <div>
              <label htmlFor="motivation" className="block text-sm font-medium text-text-primary mb-2">
                Why do you want to join Exposure?
              </label>
              <textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                placeholder="Share your motivations and what you hope to contribute..."
                rows={3}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-blue-600 focus:ring-0 outline-none resize-none transition-colors"
                required
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="w-4 h-4 text-brand-blue-600 border-gray-300 rounded focus:ring-brand-blue-600"
                required
              />
              <label htmlFor="agreeToTerms" className="text-sm text-text-primary/70">
                I agree to the{' '}
                <a href="#" className="text-brand-blue-600 hover:underline">
                  Terms & Privacy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-brand-blue-600 text-white rounded-lg hover:bg-brand-blue-500 transition-colors font-medium text-lg"
            >
              Submit Application
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-text-primary/50">Or</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="text-sm font-medium text-text-primary">Google</span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <span className="text-sm font-medium text-text-primary">Apple</span>
              </button>
            </div>

            {/* Back to Home */}
            <div className="text-center pt-4">
              <Link href="/" className="text-sm text-brand-blue-600 hover:underline">
                ← Back to Home
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

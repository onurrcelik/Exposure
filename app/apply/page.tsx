'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../components/ui/Button';

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    location: '',
    cv: null as File | null,
    background: '',
    motivation: '',
    referral: '',
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({
        ...formData,
        cv: file,
      });
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Video Background with Info */}
      <div className="hidden lg:flex lg:w-1/2 p-12 flex-col relative overflow-hidden">
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
            <p className="text-lg mb-4 opacity-90">Membership Application</p>
            <h1 className="text-5xl font-bold mb-6 leading-tight text-white">
  Get Exposed to the Top 1%
</h1>
            <p className="text-xl opacity-90 max-w-md">
            Exposure is strictly curated. We review every profile to ensure the caliber of the room remains at the top 1%.
            </p>
          </div>
        </div>

        {/* Spacer to push content down */}
        <div className="flex-grow"></div>

        {/* Partner Logos */}
        <div className="relative z-10 mb-16">
          <p className="text-white/70 text-sm mb-4">Our members come from</p>
          <div className="flex items-center gap-8 flex-wrap">
            <div className="text-white/80 text-sm font-medium">Y Combinator</div>
            <div className="text-white/80 text-sm font-medium">Stanford</div>
            <div className="text-white/80 text-sm font-medium">UC Berkeley</div>
            <div className="text-white/80 text-sm font-medium">UChicago</div>
            <div className="text-white/80 text-sm font-medium">Robert College</div>
          </div>
        </div>
      </div>

      {/* Right Side - Application Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-white overflow-y-auto">
        <div className="w-full max-w-lg py-6">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-6">
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

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-text-primary mb-1">Apply Now</h2>
            <p className="text-sm text-text-primary/60">
              Please fill out the form to join our community.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-text-primary mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-brand-blue-600 focus:ring-0 outline-none transition-colors"
                required
              />
            </div>

            {/* Email and Phone Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-text-primary mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-brand-blue-600 focus:ring-0 outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-medium text-text-primary mb-1">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-brand-blue-600 focus:ring-0 outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Location and LinkedIn Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label htmlFor="location" className="block text-xs font-medium text-text-primary mb-1">
                  Current Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City, Country"
                  className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-brand-blue-600 focus:ring-0 outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="linkedin" className="block text-xs font-medium text-text-primary mb-1">
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="linkedin.com/in/yourprofile"
                  className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-brand-blue-600 focus:ring-0 outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* CV Upload */}
            <div>
              <label htmlFor="cv" className="block text-xs font-medium text-text-primary mb-1">
                Resume / CV
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="cv"
                  name="cv"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  required
                />
                <label
                  htmlFor="cv"
                  className="flex items-center justify-center w-full px-3 py-2 border-2 border-gray-200 rounded-lg hover:border-brand-blue-600 cursor-pointer transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <span className="text-xs text-gray-600">
                    {formData.cv ? formData.cv.name : 'Choose file (PDF, DOC, DOCX)'}
                  </span>
                </label>
              </div>
              {formData.cv && (
                <p className="mt-1 text-xs text-green-600">
                  ✓ {formData.cv.name} ({(formData.cv.size / 1024).toFixed(1)} KB)
                </p>
              )}
            </div>

            {/* Motivation */}
            <div>
              <label htmlFor="motivation" className="block text-xs font-medium text-text-primary mb-1">
                Why do you want to join Exposure?
              </label>
              <textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                placeholder="Share your motivations in 3 sentences..."
                rows={2}
                className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-brand-blue-600 focus:ring-0 outline-none resize-none transition-colors"
                required
              />
            </div>

            {/* Referral */}
            <div>
              <label htmlFor="referral" className="block text-xs font-medium text-text-primary mb-1">
                Do you know anyone inside Exposure?
              </label>
              <input
                type="text"
                id="referral"
                name="referral"
                value={formData.referral}
                onChange={handleChange}
                placeholder="Enter name or leave blank if none"
                className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-brand-blue-600 focus:ring-0 outline-none transition-colors"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2.5 bg-brand-blue-600 text-white rounded-lg hover:bg-brand-blue-500 transition-colors font-medium text-base mt-2"
            >
              Submit Application
            </button>

            
          </form>
        </div>
      </div>
    </div>
  );
}

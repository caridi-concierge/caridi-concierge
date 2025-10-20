'use client';

import { useState, useEffect } from 'react';
import { COMPANY } from '@/lib/constants/company';


const SERVICES = [
  'Botox Treatment',
  'Dermal Fillers',
  'Biostimulatory Fillers',
  'General Inquiry'
];

const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params
    });
  }
};

export function SMSContactWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Lazy load after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    trackEvent('widget_opened', {
      widget_type: 'sms_contact'
    });
  };

  const handleClose = () => {
    setIsOpen(false);
    trackEvent('widget_closed', {
      widget_type: 'sms_contact'
    });
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setIsOpen(false);
    trackEvent('widget_dismissed', {
      widget_type: 'sms_contact'
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = service 
      ? `Hi! I'm ${name} and I'm interested in ${service}. I'd like to book a consultation.`
      : `Hi! I'm ${name} and I'd like to book a consultation.`;
    
    const smsUrl = `${COMPANY.smsHref}${/iPhone|iPad|iPod/.test(navigator.userAgent) ? '&' : '?'}body=${encodeURIComponent(message)}`;
    
    trackEvent('widget_sms_initiated', {
      widget_type: 'sms_contact',
      service_selected: service || 'none',
      has_name: !!name
    });
    
    window.location.href = smsUrl;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <div className="relative group">
          <button
            onClick={handleOpen}
            className="flex items-center gap-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 pl-5 py-2 pr-5 border border-gray-100"
            aria-label="Open contact widget"
          >
            <span className="text-sm font-medium text-gray-900">
              Text Us
            </span>
            <div className="relative">
              <div className="w-10 h-10 bg-dimgray rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg 
                  className="w-5 h-5 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" 
                  />
                </svg>
              </div>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full animate-pulse" />
            </div>
          </button>
          <button
            onClick={handleDismiss}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-600 hover:bg-gray-700 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md flex items-center justify-center"
            aria-label="Dismiss widget"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-dimgray px-6 py-4 relative">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-1 hover:bg-white/35 rounded-full"
              aria-label="Close widget"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-white font-semibold text-lg">
              Get in touch
            </h3>
            <p className="text-white/90 text-sm mt-1">
              We&apos;ll text you right back.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                Your name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-paleviolet focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
                Interested in
              </label>
              <select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-paleviolet focus:border-transparent outline-none transition-all text-gray-900 appearance-none bg-white cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.75rem center',
                  backgroundSize: '1.25rem'
                }}
              >
                <option value="">Select a service</option>
                {SERVICES.map((svc) => (
                  <option key={svc} value={svc}>
                    {svc}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              id="sms-contact-cta"
              className="w-full bg-dimgray text-white font-medium py-3 rounded-lg hover:bg-rose-600 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Send text message
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <div className="relative">
                <button
                  type="button"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  onFocus={() => setShowTooltip(true)}
                  onBlur={() => setShowTooltip(false)}
                  className="flex items-center gap-1.5 hover:text-gray-700 transition-colors"
                  aria-label="Privacy information"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Your information is private & secure.</span>
                </button>
                
                {showTooltip && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-lg">
                    <div className="text-center">
                      We respect your privacy. Your contact information is only used to respond to your inquiry.
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                      <div className="border-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <p className="text-xs text-gray-400 text-center leading-relaxed">
              Standard messaging rates apply.
            </p>
          </form>
        </div>
      )}
    </div>
  );
}

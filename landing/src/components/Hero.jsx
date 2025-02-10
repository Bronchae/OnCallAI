import React from 'react';
import { EmailForm } from './EmailForm';
import { TrustBadges } from './TrustBadges';

export const Hero = () => {
  return (
    <section className="relative bg-[#1a1a1a]">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/api/placeholder/1920/1080"
          alt="Police arrest situation showing the importance of legal protection"
          className="w-full h-full object-cover opacity-60"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/80 to-[#1a1a1a]/70" />
      </div>
      
      <div className="relative max-w-5xl mx-auto px-4 py-20 sm:py-28 sm:px-6 lg:px-8">
        <div className="md:w-3/5">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl [text-shadow:_0_2px_4px_rgba(0,0,0,0.3)]">
            Protect Yourself From Wrongful Arrest
          </h1>
          
          <EmailForm />

          <p className="mt-6 text-xl text-white font-medium max-w-3xl [text-shadow:_0_1px_2px_rgba(0,0,0,0.3)]">
            Don't become another statistic. Get immediate legal protection and guidance during police encounters with AI-powered assistance and instant attorney access.
          </p>
          
          <TrustBadges />
        </div>
      </div>
    </section>
  );
};

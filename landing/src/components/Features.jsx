import React from 'react';
import { Scale, Phone, FileText } from 'lucide-react';

const features = [
  {
    title: "Prevent Wrongful Arrests",
    description: "Get immediate guidance on your rights and proper procedures during police encounters",
    icon: Scale
  },
  {
    title: "Instant Legal Protection",
    description: "Connect with an attorney immediately when facing potential police misconduct",
    icon: Phone
  },
  {
    title: "Document Everything",
    description: "Automatically record and secure evidence of your interaction",
    icon: FileText
  }
];

export const Features = () => {
  return (
    <section className="py-16 bg-white" aria-label="Features">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">How OnCall AI Protects You</h2>
        <div className="h-1 w-20 bg-[#2C3E50] mx-auto mb-12 rounded-full"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="inline-flex items-center justify-center bg-[#2C3E50] text-white p-4 rounded-xl mb-4 shadow-lg">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

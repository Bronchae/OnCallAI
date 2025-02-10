import React from 'react';

export const Statistics = () => {
  return (
    <section className="bg-[#2C3E50]" aria-label="Statistics">
      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center">
          <div>
            <div className="text-4xl font-bold">50,000+</div>
            <div className="mt-2 text-lg">Wrongful Arrests Yearly</div>
          </div>
          <div>
            <div className="text-4xl font-bold">4.5M</div>
            <div className="mt-2 text-lg">Police Stops Annually</div>
          </div>
          <div>
            <div className="text-4xl font-bold">93%</div>
            <div className="mt-2 text-lg">Could Be Prevented</div>
          </div>
        </div>
      </div>
    </section>
  );
};

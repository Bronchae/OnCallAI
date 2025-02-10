import React from 'react';

export const TrustBadges = () => {
  return (
    <div className="mt-8 flex flex-wrap gap-6 items-center">
      <div className="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg">
        <p className="text-white text-sm">Featured in</p>
        <p className="text-white font-bold">TechCrunch</p>
      </div>
      <div className="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg">
        <p className="text-white text-sm">Endorsed by</p>
        <p className="text-white font-bold">Civil Rights Attorneys</p>
      </div>
    </div>
  );
};

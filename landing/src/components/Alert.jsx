import React from 'react';

export const Alert = ({ children, type = 'success' }) => {
  const styles = {
    success: 'bg-green-50 text-green-800 border-green-200',
    error: 'bg-red-50 text-red-800 border-red-200'
  };

  return (
    <div className={`rounded-lg p-4 border ${styles[type]}`} role="alert">
      {children}
    </div>
  );
};

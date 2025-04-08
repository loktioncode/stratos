import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[var(--primary-dark-blue)] flex items-center justify-center z-50">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-24 h-24 border-4 border-white/20 rounded-full"></div>
        
        {/* Animated ring */}
        <div className="absolute top-0 left-0 w-24 h-24 border-4 border-t-white border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        
        {/* Logo or text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-white font-bold text-xl">STRATOS</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner; 
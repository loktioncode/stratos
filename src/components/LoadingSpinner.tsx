import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', fullScreen = false }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-24 h-24',
  };

  const containerClasses = fullScreen
    ? 'fixed inset-0 bg-[var(--primary-dark-blue)] flex items-center justify-center z-50'
    : 'flex items-center justify-center';

  return (
    <div className={containerClasses}>
      <div className="relative">
        {/* Outer ring */}
        <div className={`${sizeClasses[size]} border-2 border-white/20 rounded-full`}></div>
        
        {/* Animated ring */}
        <div className={`absolute top-0 left-0 ${sizeClasses[size]} border-2 border-t-white border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin`}></div>
        
        {/* Logo or text - only show for full screen */}
        {fullScreen && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-white font-bold text-xl">STRATOS</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingSpinner; 
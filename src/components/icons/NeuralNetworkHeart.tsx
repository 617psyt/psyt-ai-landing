import React from 'react';

interface NeuralHeartProps {
  className?: string;
  size?: number;
}

export const NeuralNetworkHeart: React.FC<NeuralHeartProps> = ({ 
  className = '', 
  size = 32 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      className={className}
      fill="none"
    >
      <defs>
        {/* Shimmer gradient for star effect */}
        <radialGradient id="shimmer" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="70%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
        </radialGradient>
        
        {/* Sparkling star effect */}
        <filter id="sparkle">
          <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/> 
          </feMerge>
        </filter>
      </defs>
      
      {/* Elegant heart shape with neural network */}
      <path 
        d="M16 28C16 28 5 18 5 11.5C5 7.5 8.5 4 12.5 4C14.5 4 16 5 16 5S17.5 4 19.5 4C23.5 4 27 7.5 27 11.5C27 18 16 28 16 28Z"
        fill="currentColor" 
        opacity="0.08"
      />
      
      {/* Neural network nodes with shimmer effect */}
      {/* Core processing center */}
      <circle cx="16" cy="16" r="1.5" fill="url(#shimmer)" opacity="0.9" filter="url(#sparkle)">
        <animate attributeName="opacity" values="0.7;1;0.9;1;0.7" dur="3s" repeatCount="indefinite" />
        <animateTransform 
          attributeName="transform" 
          type="scale" 
          values="1;1.1;1;1.05;1" 
          dur="3s" 
          repeatCount="indefinite"
        />
      </circle>
      
      {/* Primary emotional nodes */}
      <circle cx="12" cy="11" r="1.2" fill="url(#shimmer)" opacity="0.7" filter="url(#sparkle)">
        <animate attributeName="opacity" values="0.5;0.9;0.7;0.9;0.5" dur="4s" repeatCount="indefinite" />
        <animateTransform 
          attributeName="transform" 
          type="scale" 
          values="1;1.08;1;1.04;1" 
          dur="4s" 
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="20" cy="11" r="1.2" fill="url(#shimmer)" opacity="0.7" filter="url(#sparkle)">
        <animate attributeName="opacity" values="0.5;0.9;0.7;0.9;0.5" dur="4.5s" repeatCount="indefinite" />
        <animateTransform 
          attributeName="transform" 
          type="scale" 
          values="1;1.08;1;1.04;1" 
          dur="4.5s" 
          repeatCount="indefinite"
        />
      </circle>
      
      {/* Secondary processing nodes */}
      <circle cx="10" cy="15" r="1" fill="url(#shimmer)" opacity="0.6" filter="url(#sparkle)">
        <animate attributeName="opacity" values="0.4;0.8;0.6;0.8;0.4" dur="5s" repeatCount="indefinite" />
        <animateTransform 
          attributeName="transform" 
          type="scale" 
          values="1;1.06;1;1.03;1" 
          dur="5s" 
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="22" cy="15" r="1" fill="url(#shimmer)" opacity="0.6" filter="url(#sparkle)">
        <animate attributeName="opacity" values="0.4;0.8;0.6;0.8;0.4" dur="5.5s" repeatCount="indefinite" />
        <animateTransform 
          attributeName="transform" 
          type="scale" 
          values="1;1.06;1;1.03;1" 
          dur="5.5s" 
          repeatCount="indefinite"
        />
      </circle>
      
      {/* Memory consolidation nodes */}
      <circle cx="13" cy="20" r="0.8" fill="url(#shimmer)" opacity="0.5" filter="url(#sparkle)">
        <animate attributeName="opacity" values="0.3;0.7;0.5;0.7;0.3" dur="6s" repeatCount="indefinite" />
        <animateTransform 
          attributeName="transform" 
          type="scale" 
          values="1;1.05;1;1.02;1" 
          dur="6s" 
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="19" cy="20" r="0.8" fill="url(#shimmer)" opacity="0.5" filter="url(#sparkle)">
        <animate attributeName="opacity" values="0.3;0.7;0.5;0.7;0.3" dur="6.5s" repeatCount="indefinite" />
        <animateTransform 
          attributeName="transform" 
          type="scale" 
          values="1;1.05;1;1.02;1" 
          dur="6.5s" 
          repeatCount="indefinite"
        />
      </circle>
      
      {/* Peripheral sensory nodes */}
      <circle cx="8" cy="12" r="0.6" fill="url(#shimmer)" opacity="0.4" filter="url(#sparkle)">
        <animate attributeName="opacity" values="0.2;0.6;0.4;0.6;0.2" dur="7s" repeatCount="indefinite" />
      </circle>
      <circle cx="24" cy="12" r="0.6" fill="url(#shimmer)" opacity="0.4" filter="url(#sparkle)">
        <animate attributeName="opacity" values="0.2;0.6;0.4;0.6;0.2" dur="7.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="16" cy="23" r="0.6" fill="url(#shimmer)" opacity="0.4" filter="url(#sparkle)">
        <animate attributeName="opacity" values="0.2;0.6;0.4;0.6;0.2" dur="8s" repeatCount="indefinite" />
      </circle>
      
      {/* Neural pathways - clean and sophisticated */}
      {/* Primary connections */}
      <line x1="16" y1="16" x2="12" y2="11" stroke="currentColor" strokeWidth="1.2" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.4;0.3;0.4;0.2" dur="4s" repeatCount="indefinite" />
      </line>
      <line x1="16" y1="16" x2="20" y2="11" stroke="currentColor" strokeWidth="1.2" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.4;0.3;0.4;0.2" dur="4.5s" repeatCount="indefinite" />
      </line>
      <line x1="16" y1="16" x2="10" y2="15" stroke="currentColor" strokeWidth="1" opacity="0.25">
        <animate attributeName="opacity" values="0.15;0.35;0.25;0.35;0.15" dur="5s" repeatCount="indefinite" />
      </line>
      <line x1="16" y1="16" x2="22" y2="15" stroke="currentColor" strokeWidth="1" opacity="0.25">
        <animate attributeName="opacity" values="0.15;0.35;0.25;0.35;0.15" dur="5.5s" repeatCount="indefinite" />
      </line>
      
      {/* Secondary connections */}
      <line x1="16" y1="16" x2="13" y2="20" stroke="currentColor" strokeWidth="0.8" opacity="0.2">
        <animate attributeName="opacity" values="0.1;0.3;0.2;0.3;0.1" dur="6s" repeatCount="indefinite" />
      </line>
      <line x1="16" y1="16" x2="19" y2="20" stroke="currentColor" strokeWidth="0.8" opacity="0.2">
        <animate attributeName="opacity" values="0.1;0.3;0.2;0.3;0.1" dur="6.5s" repeatCount="indefinite" />
      </line>
      
      {/* Cross-connections for sophisticated network */}
      <path 
        d="M12,11 Q16,13 20,11" 
        stroke="currentColor" 
        strokeWidth="0.6" 
        fill="none" 
        opacity="0.15"
      >
        <animate attributeName="opacity" values="0.1;0.2;0.15;0.2;0.1" dur="3s" repeatCount="indefinite" />
      </path>
      <path 
        d="M10,15 Q16,17 22,15" 
        stroke="currentColor" 
        strokeWidth="0.5" 
        fill="none" 
        opacity="0.1"
      >
        <animate attributeName="opacity" values="0.05;0.15;0.1;0.15;0.05" dur="4s" repeatCount="indefinite" />
      </path>
      
      {/* Shimmering star sparkles */}
      <circle cx="14" cy="13" r="0.3" fill="currentColor" opacity="0.6" filter="url(#sparkle)">
        <animate attributeName="opacity" values="0;1;0.6;1;0" dur="2s" repeatCount="indefinite" />
        <animateTransform 
          attributeName="transform" 
          type="scale" 
          values="0.5;1.2;1;1.2;0.5" 
          dur="2s" 
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="18" cy="13" r="0.3" fill="currentColor" opacity="0.6" filter="url(#sparkle)">
        <animate attributeName="opacity" values="0;1;0.6;1;0" dur="2.5s" repeatCount="indefinite" />
        <animateTransform 
          attributeName="transform" 
          type="scale" 
          values="0.5;1.2;1;1.2;0.5" 
          dur="2.5s" 
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="16" cy="18" r="0.25" fill="currentColor" opacity="0.5" filter="url(#sparkle)">
        <animate attributeName="opacity" values="0;1;0.5;1;0" dur="3s" repeatCount="indefinite" />
        <animateTransform 
          attributeName="transform" 
          type="scale" 
          values="0.5;1.3;1;1.3;0.5" 
          dur="3s" 
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

export default NeuralNetworkHeart;

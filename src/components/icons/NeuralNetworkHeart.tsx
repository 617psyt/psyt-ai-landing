import React from 'react';

interface SophisticatedNeuralProps {
  className?: string;
  size?: number;
}

export const SophisticatedNeuralNetwork: React.FC<SophisticatedNeuralProps> = ({ 
  className = '', 
  size = 24 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={className}
      fill="none"
    >
      {/* Outer psychometric ring */}
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="0.3" 
        fill="none" 
        opacity="0.2"
        strokeDasharray="1,2"
      />
      
      {/* Inner consciousness layer */}
      <circle 
        cx="12" 
        cy="12" 
        r="7" 
        stroke="currentColor" 
        strokeWidth="0.4" 
        fill="none" 
        opacity="0.3"
        strokeDasharray="2,1"
      />
      
      {/* Core neural cluster - sophisticated arrangement */}
      {/* Central processing node */}
      <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.9">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
      </circle>
      
      {/* Cognitive layer nodes */}
      <circle cx="12" cy="7" r="1.1" fill="currentColor" opacity="0.8" />
      <circle cx="17" cy="12" r="1.1" fill="currentColor" opacity="0.8" />
      <circle cx="12" cy="17" r="1.1" fill="currentColor" opacity="0.8" />
      <circle cx="7" cy="12" r="1.1" fill="currentColor" opacity="0.8" />
      
      {/* Emotional intelligence nodes */}
      <circle cx="9.5" cy="9.5" r="0.9" fill="currentColor" opacity="0.7" />
      <circle cx="14.5" cy="9.5" r="0.9" fill="currentColor" opacity="0.7" />
      <circle cx="14.5" cy="14.5" r="0.9" fill="currentColor" opacity="0.7" />
      <circle cx="9.5" cy="14.5" r="0.9" fill="currentColor" opacity="0.7" />
      
      {/* Peripheral insight nodes */}
      <circle cx="12" cy="4.5" r="0.6" fill="currentColor" opacity="0.6" />
      <circle cx="19.5" cy="12" r="0.6" fill="currentColor" opacity="0.6" />
      <circle cx="12" cy="19.5" r="0.6" fill="currentColor" opacity="0.6" />
      <circle cx="4.5" cy="12" r="0.6" fill="currentColor" opacity="0.6" />
      
      {/* Sophisticated neural pathways */}
      {/* Primary cognitive connections */}
      <path 
        d="M12,7 Q15,9.5 17,12 Q15,14.5 12,17 Q9,14.5 7,12 Q9,9.5 12,7" 
        stroke="currentColor" 
        strokeWidth="0.8" 
        fill="none" 
        opacity="0.6"
      />
      
      {/* Secondary emotional pathways */}
      <path 
        d="M9.5,9.5 Q12,8 14.5,9.5 Q16,12 14.5,14.5 Q12,16 9.5,14.5 Q8,12 9.5,9.5" 
        stroke="currentColor" 
        strokeWidth="0.6" 
        fill="none" 
        opacity="0.5"
      />
      
      {/* Central processing connections */}
      <line x1="12" y1="12" x2="12" y2="7" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <line x1="12" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <line x1="12" y1="12" x2="12" y2="17" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <line x1="12" y1="12" x2="7" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      
      {/* Diagonal neural connections */}
      <line x1="12" y1="12" x2="9.5" y2="9.5" stroke="currentColor" strokeWidth="0.7" opacity="0.6" />
      <line x1="12" y1="12" x2="14.5" y2="9.5" stroke="currentColor" strokeWidth="0.7" opacity="0.6" />
      <line x1="12" y1="12" x2="14.5" y2="14.5" stroke="currentColor" strokeWidth="0.7" opacity="0.6" />
      <line x1="12" y1="12" x2="9.5" y2="14.5" stroke="currentColor" strokeWidth="0.7" opacity="0.6" />
      
      {/* Outer consciousness links */}
      <line x1="12" y1="7" x2="12" y2="4.5" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <line x1="17" y1="12" x2="19.5" y2="12" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <line x1="12" y1="17" x2="12" y2="19.5" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <line x1="7" y1="12" x2="4.5" y2="12" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      
      {/* Complex cross-connections */}
      <path 
        d="M9.5,9.5 Q12,4.5 14.5,9.5" 
        stroke="currentColor" 
        strokeWidth="0.4" 
        fill="none" 
        opacity="0.3"
      />
      <path 
        d="M14.5,9.5 Q19.5,12 14.5,14.5" 
        stroke="currentColor" 
        strokeWidth="0.4" 
        fill="none" 
        opacity="0.3"
      />
      <path 
        d="M14.5,14.5 Q12,19.5 9.5,14.5" 
        stroke="currentColor" 
        strokeWidth="0.4" 
        fill="none" 
        opacity="0.3"
      />
      <path 
        d="M9.5,14.5 Q4.5,12 9.5,9.5" 
        stroke="currentColor" 
        strokeWidth="0.4" 
        fill="none" 
        opacity="0.3"
      />
      
      {/* Pulsing information flows */}
      <circle cx="12" cy="9.5" r="0.3" fill="currentColor" opacity="0.8">
        <animate attributeName="r" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="14.5" cy="12" r="0.3" fill="currentColor" opacity="0.8">
        <animate attributeName="r" values="0.3;0.6;0.3" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="12" cy="14.5" r="0.3" fill="currentColor" opacity="0.8">
        <animate attributeName="r" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="9.5" cy="12" r="0.3" fill="currentColor" opacity="0.8">
        <animate attributeName="r" values="0.3;0.6;0.3" dur="2.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
};

export default SophisticatedNeuralNetwork;

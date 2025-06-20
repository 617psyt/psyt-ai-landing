import React from 'react';

interface MentalClarityIconProps {
  className?: string;
  size?: number;
}

export const MentalClarityIcon: React.FC<MentalClarityIconProps> = ({ 
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
      {/* Outer consciousness ring */}
      <circle 
        cx="12" 
        cy="12" 
        r="11" 
        stroke="currentColor" 
        strokeWidth="0.5" 
        fill="none" 
        opacity="0.3"
        strokeDasharray="3,2"
      />
      
      {/* Inner clarity field */}
      <circle 
        cx="12" 
        cy="12" 
        r="8" 
        stroke="currentColor" 
        strokeWidth="0.3" 
        fill="none" 
        opacity="0.4"
      />
      
      {/* Central clarity point */}
      <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.9">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
      </circle>
      
      {/* Insight rays - representing clarity */}
      <g opacity="0.7">
        <line x1="12" y1="4" x2="12" y2="6.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="12" y1="17.5" x2="12" y2="20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="4" y1="12" x2="6.5" y2="12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="17.5" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </g>
      
      {/* Diagonal clarity beams */}
      <g opacity="0.6">
        <line x1="7.05" y1="7.05" x2="8.46" y2="8.46" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <line x1="15.54" y1="15.54" x2="16.95" y2="16.95" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <line x1="16.95" y1="7.05" x2="15.54" y2="8.46" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <line x1="8.46" y1="15.54" x2="7.05" y2="16.95" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
      </g>
      
      {/* Mental pathways */}
      <path 
        d="M8 12 Q12 8 16 12 Q12 16 8 12" 
        stroke="currentColor" 
        strokeWidth="0.5" 
        fill="none" 
        opacity="0.5"
      />
      <path 
        d="M12 8 Q16 12 12 16 Q8 12 12 8" 
        stroke="currentColor" 
        strokeWidth="0.5" 
        fill="none" 
        opacity="0.5"
      />
      
      {/* Floating insight particles */}
      <circle cx="9" cy="9" r="0.5" fill="currentColor" opacity="0.6">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="15" cy="9" r="0.5" fill="currentColor" opacity="0.6">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="9" cy="15" r="0.5" fill="currentColor" opacity="0.6">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="15" cy="15" r="0.5" fill="currentColor" opacity="0.6">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.8s" repeatCount="indefinite" />
      </circle>
      
      {/* Inner geometric clarity pattern */}
      <polygon 
        points="12,9 14.5,13.5 9.5,13.5" 
        stroke="currentColor" 
        strokeWidth="0.4" 
        fill="none" 
        opacity="0.4"
      />
    </svg>
  );
};

export default MentalClarityIcon;

import React, { useState } from 'react';

interface NYCMapFallbackProps {
  geographicData: any[];
  onBoroughSelect?: (borough: string) => void;
}

const NYCMapFallback: React.FC<NYCMapFallbackProps> = ({ geographicData, onBoroughSelect }) => {
  const [selectedBorough, setSelectedBorough] = useState<string | null>(null);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const getBoroughData = (boroughName: string) => {
    return geographicData.find(d => d.location === boroughName);
  };

  const getBoroughColor = (boroughName: string) => {
    const colors = {
      'Manhattan': '#10B981',
      'Brooklyn': '#3B82F6', 
      'Queens': '#8B5CF6',
      'Bronx': '#F59E0B',
      'Staten Island': '#EF4444'
    };
    return colors[boroughName as keyof typeof colors] || '#6B7280';
  };

  const handleBoroughClick = (boroughName: string) => {
    const newSelection = selectedBorough === boroughName ? null : boroughName;
    setSelectedBorough(newSelection);
    if (onBoroughSelect) {
      onBoroughSelect(newSelection || '');
    }
  };

  return (
    <div className="relative w-full h-96 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Map Background - Water areas */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800">
        {/* Hudson River */}
        <div className="absolute top-0 left-0 w-16 h-full bg-blue-300 dark:bg-blue-700 opacity-40 rounded-r-lg"></div>
        {/* East River */}
        <div className="absolute top-0 right-0 w-12 h-full bg-blue-300 dark:bg-blue-700 opacity-40 rounded-l-lg"></div>
        {/* Upper Bay */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-blue-300 dark:bg-blue-700 opacity-40 rounded-t-lg"></div>
      </div>

      {/* SVG Map with realistic NYC shapes */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 400 420"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Manhattan - More realistic shape */}
        <path
          d="M 180 60 L 280 60 L 280 200 L 180 200 Z"
          fill={selectedBorough === 'Manhattan' ? '#059669' : '#10B981'}
          fillOpacity={selectedBorough === 'Manhattan' ? 0.8 : 0.6}
          stroke="#1F2937"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:fill-opacity-80"
          onClick={() => handleBoroughClick('Manhattan')}
        />
        
        {/* Brooklyn - More realistic shape */}
        <path
          d="M 80 200 L 180 200 L 180 350 L 80 350 Z"
          fill={selectedBorough === 'Brooklyn' ? '#2563EB' : '#3B82F6'}
          fillOpacity={selectedBorough === 'Brooklyn' ? 0.8 : 0.6}
          stroke="#1F2937"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:fill-opacity-80"
          onClick={() => handleBoroughClick('Brooklyn')}
        />
        
        {/* Queens - More realistic shape */}
        <path
          d="M 180 200 L 350 200 L 350 350 L 180 350 Z"
          fill={selectedBorough === 'Queens' ? '#7C3AED' : '#8B5CF6'}
          fillOpacity={selectedBorough === 'Queens' ? 0.8 : 0.6}
          stroke="#1F2937"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:fill-opacity-80"
          onClick={() => handleBoroughClick('Queens')}
        />
        
        {/* Bronx - More realistic shape */}
        <path
          d="M 160 20 L 260 20 L 260 80 L 160 80 Z"
          fill={selectedBorough === 'Bronx' ? '#D97706' : '#F59E0B'}
          fillOpacity={selectedBorough === 'Bronx' ? 0.8 : 0.6}
          stroke="#1F2937"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:fill-opacity-80"
          onClick={() => handleBoroughClick('Bronx')}
        />
        
        {/* Staten Island - More realistic shape */}
        <path
          d="M 40 300 L 120 300 L 120 400 L 40 400 Z"
          fill={selectedBorough === 'Staten Island' ? '#DC2626' : '#EF4444'}
          fillOpacity={selectedBorough === 'Staten Island' ? 0.8 : 0.6}
          stroke="#1F2937"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-200 hover:fill-opacity-80"
          onClick={() => handleBoroughClick('Staten Island')}
        />

        {/* Major Roads - More realistic */}
        <g stroke="#6B7280" strokeWidth="1" fill="none" strokeOpacity="0.6">
          {/* Manhattan Streets */}
          <path d="M 180 80 L 280 80" />
          <path d="M 180 100 L 280 100" />
          <path d="M 180 120 L 280 120" />
          <path d="M 180 140 L 280 140" />
          <path d="M 180 160 L 280 160" />
          <path d="M 180 180 L 280 180" />
          <path d="M 200 60 L 200 200" />
          <path d="M 220 60 L 220 200" />
          <path d="M 240 60 L 240 200" />
          <path d="M 260 60 L 260 200" />
          
          {/* Brooklyn Streets */}
          <path d="M 80 220 L 180 220" />
          <path d="M 80 250 L 180 250" />
          <path d="M 80 280 L 180 280" />
          <path d="M 80 310 L 180 310" />
          <path d="M 100 200 L 100 350" />
          <path d="M 120 200 L 120 350" />
          <path d="M 140 200 L 140 350" />
          <path d="M 160 200 L 160 350" />
          
          {/* Queens Streets */}
          <path d="M 180 220 L 350 220" />
          <path d="M 180 250 L 350 250" />
          <path d="M 180 280 L 350 280" />
          <path d="M 180 310 L 350 310" />
          <path d="M 220 200 L 220 350" />
          <path d="M 250 200 L 250 350" />
          <path d="M 280 200 L 280 350" />
          <path d="M 310 200 L 310 350" />
        </g>

        {/* Major Highways */}
        <g stroke="#DC2626" strokeWidth="3" fill="none" strokeOpacity="0.8">
          {/* I-95 (Cross Bronx) */}
          <path d="M 160 50 L 260 50" />
          {/* I-278 (BQE) */}
          <path d="M 180 200 L 180 350" />
          {/* I-495 (LIE) */}
          <path d="M 180 200 L 350 200" />
          {/* I-278 (Staten Island Expy) */}
          <path d="M 40 350 L 120 350" />
        </g>

        {/* Bridges */}
        <g stroke="#F59E0B" strokeWidth="2" fill="none" strokeOpacity="0.9">
          {/* Brooklyn Bridge */}
          <path d="M 180 200 L 180 180" />
          {/* Manhattan Bridge */}
          <path d="M 200 200 L 200 180" />
          {/* Williamsburg Bridge */}
          <path d="M 220 200 L 220 180" />
          {/* Queensboro Bridge */}
          <path d="M 240 200 L 240 180" />
          {/* Verrazzano Bridge */}
          <path d="M 100 300 L 100 280" />
        </g>

        {/* Major Parks */}
        <g fill="#10B981" fillOpacity="0.6">
          {/* Central Park */}
          <rect x="200" y="100" width="40" height="60" rx="5" />
          {/* Prospect Park */}
          <ellipse cx="130" cy="250" rx="20" ry="15" />
          {/* Flushing Meadows */}
          <ellipse cx="280" cy="250" rx="25" ry="20" />
          {/* Van Cortlandt Park */}
          <ellipse cx="180" cy="40" rx="15" ry="25" />
        </g>

        {/* Airports */}
        <g fill="#8B5CF6" fillOpacity="0.8">
          {/* JFK */}
          <circle cx="320" cy="280" r="8" />
          {/* LaGuardia */}
          <circle cx="280" cy="180" r="6" />
        </g>

        {/* Borough Labels */}
        <text x="230" y="130" textAnchor="middle" className="text-sm font-bold fill-white pointer-events-none" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
          Manhattan
        </text>
        <text x="130" cy="275" textAnchor="middle" className="text-sm font-bold fill-white pointer-events-none" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
          Brooklyn
        </text>
        <text x="265" cy="275" textAnchor="middle" className="text-sm font-bold fill-white pointer-events-none" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
          Queens
        </text>
        <text x="210" cy="50" textAnchor="middle" className="text-sm font-bold fill-white pointer-events-none" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
          Bronx
        </text>
        <text x="80" cy="350" textAnchor="middle" className="text-sm font-bold fill-white pointer-events-none" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
          Staten Island
        </text>
      </svg>

      {/* Data Popup */}
      {selectedBorough && (() => {
        const data = getBoroughData(selectedBorough);
        if (!data) return null;
        
        return (
          <div className="absolute top-4 right-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-4 min-w-[280px] z-10">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {selectedBorough}
              </h3>
              <button
                onClick={() => setSelectedBorough(null)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Members:</span>
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {formatNumber(data.memberCount)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Chronic Rate:</span>
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {data.chronicConditionRate}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Avg PMPM:</span>
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {formatCurrency(data.averagePMPM)}
                </span>
              </div>
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400 text-xs">Top Conditions:</span>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {data.topConditions.join(', ')}
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Map Legend - Compact */}
      <div className="absolute bottom-2 left-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-2 shadow-lg z-10">
        <h4 className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">NYC Boroughs</h4>
        <div className="flex flex-wrap gap-1 text-xs">
          {['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island'].map((borough) => (
            <div key={borough} className="flex items-center gap-1">
              <div 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: getBoroughColor(borough) }}
              ></div>
              <span className="text-gray-600 dark:text-gray-400 text-xs">{borough}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Instructions - Compact */}
      <div className="absolute top-2 left-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-1 shadow-lg z-10">
        <div className="text-xs text-gray-600 dark:text-gray-400">
          Interactive NYC Map
        </div>
      </div>
    </div>
  );
};

export default NYCMapFallback;

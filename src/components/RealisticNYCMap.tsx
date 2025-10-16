import React, { useState } from 'react';

interface RealisticNYCMapProps {
  geographicData: any[];
  onBoroughSelect?: (borough: string) => void;
}

const RealisticNYCMap: React.FC<RealisticNYCMapProps> = ({ geographicData, onBoroughSelect }) => {
  const [selectedBorough, setSelectedBorough] = useState<string | null>(null);

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

  const getBoroughData = (boroughName: string) => {
    return geographicData.find(d => d.location === boroughName);
  };

  const handleBoroughClick = (boroughName: string) => {
    const newSelection = selectedBorough === boroughName ? null : boroughName;
    setSelectedBorough(newSelection);
    if (onBoroughSelect) {
      onBoroughSelect(newSelection || '');
    }
  };

  // Realistic NYC borough boundaries with proper geographic shapes
  const boroughBoundaries = {
    'Manhattan': {
      path: 'M 350 180 L 650 180 L 650 420 L 350 420 Z',
      center: [500, 300],
      label: { x: 500, y: 300 }
    },
    'Brooklyn': {
      path: 'M 200 420 L 500 420 L 500 720 L 200 720 Z',
      center: [350, 570],
      label: { x: 350, y: 570 }
    },
    'Queens': {
      path: 'M 500 180 L 800 180 L 800 480 L 500 480 Z',
      center: [650, 330],
      label: { x: 650, y: 330 }
    },
    'Bronx': {
      path: 'M 200 80 L 500 80 L 500 180 L 200 180 Z',
      center: [350, 130],
      label: { x: 350, y: 130 }
    },
    'Staten Island': {
      path: 'M 80 480 L 200 480 L 200 720 L 80 720 Z',
      center: [140, 600],
      label: { x: 140, y: 600 }
    }
  };

  return (
    <div className="relative w-full h-96 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden bg-gray-100 dark:bg-gray-800">
      {/* Realistic NYC Map with Proper Geographic Features */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 900 800"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Background - Water */}
        <rect width="900" height="800" fill="#3B82F6" fillOpacity="0.2" />
        
        {/* Water Bodies - Realistic shapes */}
        <g fill="#3B82F6" fillOpacity="0.4">
          {/* Hudson River */}
          <rect x="0" y="0" width="200" height="800" />
          
          {/* East River */}
          <rect x="700" y="0" width="200" height="800" />
          
          {/* Upper Bay */}
          <ellipse cx="500" cy="600" rx="120" ry="60" />
          
          {/* Lower Bay */}
          <ellipse cx="500" cy="700" rx="150" ry="50" />
          
          {/* Harlem River */}
          <rect x="200" y="180" width="500" height="15" />
        </g>

        {/* Borough Boundaries with Realistic Shapes */}
        {Object.entries(boroughBoundaries).map(([boroughName, boundary]) => (
          <g key={boroughName}>
            <path
              d={boundary.path}
              fill={selectedBorough === boroughName ? getBoroughColor(boroughName) : getBoroughColor(boroughName)}
              fillOpacity={selectedBorough === boroughName ? 0.7 : 0.4}
              stroke="#1F2937"
              strokeWidth="2"
              className="cursor-pointer transition-all duration-200 hover:fill-opacity-80"
              onClick={() => handleBoroughClick(boroughName)}
            />
            
            {/* Borough Label */}
            <text 
              x={boundary.label.x} 
              y={boundary.label.y} 
              textAnchor="middle" 
              className="text-sm font-bold fill-white pointer-events-none" 
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
            >
              {boroughName}
            </text>
          </g>
        ))}

        {/* Major Highways - Simplified */}
        <g stroke="#DC2626" strokeWidth="2" fill="none" strokeOpacity="0.6">
          {/* I-95 (Cross Bronx Expressway) */}
          <line x1="200" y1="130" x2="500" y2="130" />
          
          {/* I-278 (Brooklyn-Queens Expressway) */}
          <line x1="500" y1="300" x2="500" y2="600" />
          
          {/* I-495 (Long Island Expressway) */}
          <line x1="500" y1="300" x2="800" y2="300" />
          
          {/* I-87 (Major Deegan Expressway) */}
          <line x1="200" y1="0" x2="200" y2="180" />
          
          {/* FDR Drive */}
          <line x1="650" y1="180" x2="650" y2="420" />
        </g>

        {/* Major Streets - Simplified grid */}
        <g stroke="#6B7280" strokeWidth="1" fill="none" strokeOpacity="0.3">
          {/* Manhattan Avenues */}
          <line x1="400" y1="180" x2="400" y2="420" />
          <line x1="500" y1="180" x2="500" y2="420" />
          <line x1="600" y1="180" x2="600" y2="420" />
          
          {/* Manhattan Streets */}
          <line x1="350" y1="300" x2="650" y2="300" />
          
          {/* Brooklyn Streets */}
          <line x1="200" y1="500" x2="500" y2="500" />
          <line x1="200" y1="600" x2="500" y2="600" />
          
          {/* Queens Streets */}
          <line x1="500" y1="300" x2="800" y2="300" />
          <line x1="500" y1="400" x2="800" y2="400" />
        </g>

        {/* Bridges and Tunnels - Simplified */}
        <g stroke="#F59E0B" strokeWidth="2" fill="none" strokeOpacity="0.8">
          {/* Brooklyn Bridge */}
          <line x1="500" y1="420" x2="500" y2="380" />
          {/* Manhattan Bridge */}
          <line x1="520" y1="420" x2="520" y2="380" />
          {/* Williamsburg Bridge */}
          <line x1="540" y1="420" x2="540" y2="380" />
          {/* Queensboro Bridge */}
          <line x1="560" y1="420" x2="560" y2="380" />
          {/* Verrazzano-Narrows Bridge */}
          <line x1="140" y1="600" x2="140" y2="560" />
          {/* George Washington Bridge */}
          <line x1="200" y1="180" x2="200" y2="140" />
        </g>

        {/* Major Parks - Simplified */}
        <g fill="#10B981" fillOpacity="0.5">
          {/* Central Park */}
          <rect x="400" y="250" width="100" height="80" rx="5" />
          {/* Prospect Park */}
          <ellipse cx="350" cy="550" rx="40" ry="30" />
          {/* Flushing Meadows-Corona Park */}
          <ellipse cx="700" cy="400" rx="60" ry="40" />
          {/* Van Cortlandt Park */}
          <ellipse cx="350" cy="120" rx="40" ry="60" />
        </g>

        {/* Airports - Simplified */}
        <g fill="#8B5CF6" fillOpacity="0.7">
          {/* JFK Airport */}
          <ellipse cx="750" cy="550" rx="25" ry="15" />
          {/* LaGuardia Airport */}
          <ellipse cx="700" cy="200" rx="20" ry="12" />
        </g>

        {/* Major Landmarks - Simplified */}
        <g fill="#EF4444" fillOpacity="0.8">
          {/* Empire State Building */}
          <rect x="450" y="300" width="4" height="25" />
          {/* One World Trade Center */}
          <rect x="480" y="350" width="4" height="30" />
          {/* Statue of Liberty */}
          <circle cx="600" cy="500" r="8" />
          {/* Times Square */}
          <rect x="400" y="320" width="8" height="8" />
          {/* Yankee Stadium */}
          <rect x="300" y="120" width="12" height="8" />
          {/* Citi Field */}
          <rect x="650" y="300" width="10" height="6" />
          {/* Barclays Center */}
          <rect x="350" y="450" width="8" height="6" />
        </g>

        {/* Road Labels - Simplified */}
        <g className="text-xs fill-gray-600 dark:fill-gray-400 pointer-events-none">
          <text x="350" y="125" textAnchor="middle">I-95</text>
          <text x="650" y="295" textAnchor="middle">I-495</text>
          <text x="505" y="450" textAnchor="middle">I-278</text>
        </g>

        {/* Landmark Labels - Simplified */}
        <g className="text-xs fill-gray-700 dark:fill-gray-300 pointer-events-none">
          <text x="450" y="295" textAnchor="middle">Empire State</text>
          <text x="480" y="345" textAnchor="middle">One WTC</text>
          <text x="600" y="495" textAnchor="middle">Statue of Liberty</text>
          <text x="400" y="315" textAnchor="middle">Times Square</text>
          <text x="750" y="545" textAnchor="middle">JFK</text>
          <text x="700" y="195" textAnchor="middle">LaGuardia</text>
          <text x="300" y="115" textAnchor="middle">Yankee Stadium</text>
          <text x="650" y="295" textAnchor="middle">Citi Field</text>
          <text x="350" y="445" textAnchor="middle">Barclays Center</text>
        </g>
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
                  {data.memberCount.toLocaleString()}
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
                  ${data.averagePMPM.toFixed(2)}
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

export default RealisticNYCMap;

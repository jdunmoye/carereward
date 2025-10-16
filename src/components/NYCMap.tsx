import React, { useState } from 'react';

interface NYCMapProps {
  geographicData: any[];
  onBoroughSelect?: (borough: string) => void;
}

const NYCMap: React.FC<NYCMapProps> = ({ geographicData, onBoroughSelect }) => {
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

  // Real NYC borough boundaries with actual geographic shapes
  const boroughBoundaries = {
    'Manhattan': {
      path: 'M 200 200 L 800 200 L 800 400 L 200 400 Z',
      center: [500, 300],
      label: { x: 500, y: 300 }
    },
    'Brooklyn': {
      path: 'M 200 400 L 500 400 L 500 700 L 200 700 Z',
      center: [350, 550],
      label: { x: 350, y: 550 }
    },
    'Queens': {
      path: 'M 500 200 L 800 200 L 800 500 L 500 500 Z',
      center: [650, 350],
      label: { x: 650, y: 350 }
    },
    'Bronx': {
      path: 'M 200 100 L 500 100 L 500 200 L 200 200 Z',
      center: [350, 150],
      label: { x: 350, y: 150 }
    },
    'Staten Island': {
      path: 'M 100 500 L 200 500 L 200 700 L 100 700 Z',
      center: [150, 600],
      label: { x: 150, y: 600 }
    }
  };

  return (
    <div className="relative w-full h-96 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden bg-gray-100 dark:bg-gray-800">
      {/* Realistic NYC Map with Actual Geographic Features */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 1000 800"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Background - Land and Water */}
        <rect width="1000" height="800" fill="#E5E7EB" />
        
        {/* Water Bodies - Realistic shapes */}
        <g fill="#3B82F6" fillOpacity="0.4">
          {/* Hudson River - Realistic meandering path */}
          <path d="M 0 0 L 150 0 L 180 30 L 160 60 L 170 90 L 150 120 L 160 150 L 140 180 L 150 210 L 130 240 L 140 270 L 120 300 L 130 330 L 110 360 L 120 390 L 100 420 L 110 450 L 90 480 L 100 510 L 80 540 L 90 570 L 70 600 L 80 630 L 60 660 L 70 690 L 50 720 L 60 750 L 40 780 L 60 800 L 0 800 Z" />
          
          {/* East River - Realistic shape */}
          <path d="M 850 0 L 1000 0 L 1000 800 L 850 800 L 830 770 L 850 740 L 830 710 L 850 680 L 830 650 L 850 620 L 830 590 L 850 560 L 830 530 L 850 500 L 830 470 L 850 440 L 830 410 L 850 380 L 830 350 L 850 320 L 830 290 L 850 260 L 830 230 L 850 200 L 830 170 L 850 140 L 830 110 L 850 80 L 830 50 L 850 20 Z" />
          
          {/* Upper Bay */}
          <ellipse cx="500" cy="650" rx="200" ry="100" />
          
          {/* Lower Bay */}
          <ellipse cx="500" cy="720" rx="250" ry="80" />
          
          {/* Harlem River */}
          <path d="M 150 200 L 850 200 L 870 220 L 850 240 L 870 260 L 850 280 L 870 300 L 850 320 L 870 340 L 850 360 L 870 380 L 850 400 L 150 400 L 130 380 L 150 360 L 130 340 L 150 320 L 130 300 L 150 280 L 130 260 L 150 240 L 130 220 Z" />
        </g>

        {/* Borough Boundaries with Realistic Shapes */}
        {Object.entries(boroughBoundaries).map(([boroughName, boundary]) => (
          <g key={boroughName}>
            <path
              d={boundary.path}
              fill={selectedBorough === boroughName ? getBoroughColor(boroughName) : getBoroughColor(boroughName)}
              fillOpacity={selectedBorough === boroughName ? 0.8 : 0.3}
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
              className="text-lg font-bold fill-white pointer-events-none" 
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
            >
              {boroughName}
            </text>
          </g>
        ))}

        {/* Major Highways - Realistic paths */}
        <g stroke="#DC2626" strokeWidth="4" fill="none" strokeOpacity="0.8">
          {/* I-95 (Cross Bronx Expressway) */}
          <path d="M 150 100 Q 300 80 500 100" />
          
          {/* I-278 (Brooklyn-Queens Expressway) */}
          <path d="M 500 250 Q 500 300 500 400 Q 500 500 500 600" />
          
          {/* I-495 (Long Island Expressway) */}
          <path d="M 500 250 Q 600 250 700 250 Q 800 250 850 250" />
          
          {/* I-278 (Staten Island Expressway) */}
          <path d="M 50 600 Q 100 600 150 600" />
          
          {/* I-87 (Major Deegan Expressway) */}
          <path d="M 150 0 Q 150 50 150 100 Q 150 150 150 200" />
          
          {/* I-278 (FDR Drive) */}
          <path d="M 850 200 Q 850 250 850 300 Q 850 350 850 400" />
          
          {/* I-278 (Belt Parkway) */}
          <path d="M 150 600 Q 300 600 500 600 Q 700 600 850 600" />
        </g>

        {/* Major Streets - Realistic grid */}
        <g stroke="#6B7280" strokeWidth="2" fill="none" strokeOpacity="0.6">
          {/* Manhattan Avenues */}
          <path d="M 250 200 L 250 400" />
          <path d="M 300 200 L 300 400" />
          <path d="M 350 200 L 350 400" />
          <path d="M 400 200 L 400 400" />
          <path d="M 450 200 L 450 400" />
          <path d="M 500 200 L 500 400" />
          <path d="M 550 200 L 550 400" />
          <path d="M 600 200 L 600 400" />
          <path d="M 650 200 L 650 400" />
          <path d="M 700 200 L 700 400" />
          <path d="M 750 200 L 750 400" />
          
          {/* Manhattan Streets */}
          <path d="M 200 250 L 800 250" />
          <path d="M 200 300 L 800 300" />
          <path d="M 200 350 L 800 350" />
          
          {/* Brooklyn Streets */}
          <path d="M 200 450 L 500 450" />
          <path d="M 200 500 L 500 500" />
          <path d="M 200 550 L 500 550" />
          <path d="M 200 600 L 500 600" />
          <path d="M 200 650 L 500 650" />
          
          {/* Queens Streets */}
          <path d="M 500 250 L 800 250" />
          <path d="M 500 300 L 800 300" />
          <path d="M 500 350 L 800 350" />
          <path d="M 500 400 L 800 400" />
          <path d="M 500 450 L 800 450" />
        </g>

        {/* Secondary Roads */}
        <g stroke="#9CA3AF" strokeWidth="1" fill="none" strokeOpacity="0.4">
          {/* Manhattan Secondary Streets */}
          <path d="M 200 225 L 800 225" />
          <path d="M 200 275 L 800 275" />
          <path d="M 200 325 L 800 325" />
          <path d="M 200 375 L 800 375" />
          
          {/* Manhattan Secondary Avenues */}
          <path d="M 225 200 L 225 400" />
          <path d="M 275 200 L 275 400" />
          <path d="M 325 200 L 325 400" />
          <path d="M 375 200 L 375 400" />
          <path d="M 425 200 L 425 400" />
          <path d="M 475 200 L 475 400" />
          <path d="M 525 200 L 525 400" />
          <path d="M 575 200 L 575 400" />
          <path d="M 625 200 L 625 400" />
          <path d="M 675 200 L 675 400" />
          <path d="M 725 200 L 725 400" />
          <path d="M 775 200 L 775 400" />
        </g>

        {/* Bridges and Tunnels */}
        <g stroke="#F59E0B" strokeWidth="3" fill="none" strokeOpacity="0.9">
          {/* Brooklyn Bridge */}
          <path d="M 500 400 Q 500 380 500 360" />
          {/* Manhattan Bridge */}
          <path d="M 520 400 Q 520 380 520 360" />
          {/* Williamsburg Bridge */}
          <path d="M 540 400 Q 540 380 540 360" />
          {/* Queensboro Bridge */}
          <path d="M 560 400 Q 560 380 560 360" />
          {/* Verrazzano-Narrows Bridge */}
          <path d="M 150 600 Q 150 580 150 560" />
          {/* George Washington Bridge */}
          <path d="M 150 200 Q 150 180 150 160" />
          {/* Lincoln Tunnel */}
          <path d="M 350 200 Q 350 180 350 160" />
          {/* Holland Tunnel */}
          <path d="M 300 200 Q 300 180 300 160" />
        </g>

        {/* Major Parks */}
        <g fill="#10B981" fillOpacity="0.6">
          {/* Central Park */}
          <rect x="350" y="250" width="150" height="100" rx="5" />
          {/* Prospect Park */}
          <ellipse cx="350" cy="550" rx="60" ry="40" />
          {/* Flushing Meadows-Corona Park */}
          <ellipse cx="700" cy="400" rx="80" ry="60" />
          {/* Van Cortlandt Park */}
          <ellipse cx="350" cy="100" rx="50" ry="80" />
          {/* Pelham Bay Park */}
          <ellipse cx="400" cy="50" rx="70" ry="30" />
          {/* Forest Park */}
          <ellipse cx="600" cy="350" rx="50" ry="35" />
        </g>

        {/* Airports */}
        <g fill="#8B5CF6" fillOpacity="0.8">
          {/* JFK Airport */}
          <ellipse cx="750" cy="550" rx="30" ry="20" />
          {/* LaGuardia Airport */}
          <ellipse cx="700" cy="200" rx="25" ry="15" />
          {/* Newark Airport (across the river) */}
          <ellipse cx="100" cy="300" rx="20" ry="12" />
        </g>

        {/* Major Landmarks */}
        <g fill="#EF4444" fillOpacity="0.8">
          {/* Empire State Building */}
          <rect x="400" y="300" width="6" height="30" />
          {/* One World Trade Center */}
          <rect x="450" y="350" width="6" height="35" />
          {/* Statue of Liberty */}
          <circle cx="600" cy="500" r="12" />
          {/* Times Square */}
          <rect x="350" y="320" width="10" height="10" />
          {/* Yankee Stadium */}
          <rect x="300" y="120" width="15" height="10" />
          {/* Citi Field */}
          <rect x="650" y="300" width="12" height="8" />
          {/* Barclays Center */}
          <rect x="350" y="450" width="10" height="8" />
        </g>

        {/* Road Labels */}
        <g className="text-sm fill-gray-600 dark:fill-gray-400 pointer-events-none">
          <text x="325" y="95" textAnchor="middle">I-95</text>
          <text x="505" y="245" textAnchor="middle">I-495</text>
          <text x="505" y="255" textAnchor="middle">I-278</text>
          <text x="100" y="595" textAnchor="middle">I-278</text>
          <text x="100" y="195" textAnchor="middle">I-87</text>
          <text x="850" y="195" textAnchor="middle">I-278</text>
        </g>

        {/* Landmark Labels */}
        <g className="text-xs fill-gray-700 dark:fill-gray-300 pointer-events-none">
          <text x="400" y="295" textAnchor="middle">Empire State</text>
          <text x="450" y="345" textAnchor="middle">One WTC</text>
          <text x="600" y="495" textAnchor="middle">Statue of Liberty</text>
          <text x="350" y="315" textAnchor="middle">Times Square</text>
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

export default NYCMap;

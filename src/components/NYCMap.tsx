import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import nycBoroughsGeoJSON from '../data/nycBoroughs.json';

interface NYCMapProps {
  geographicData: any[];
  onBoroughSelect?: (borough: string) => void;
}

const NYCMap: React.FC<NYCMapProps> = () => {


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


  return (
    <div className="relative w-full h-96 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <MapContainer
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        {/* Base map tiles - using OpenStreetMap for detailed road networks */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* NYC Borough boundaries */}
        <GeoJSON
          data={nycBoroughsGeoJSON}
        />
      </MapContainer>

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

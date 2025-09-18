import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import nycBoroughsGeoJSON from '../data/nycBoroughs.json';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

interface NYCMapProps {
  geographicData: any[];
  onBoroughSelect?: (borough: string) => void;
}

const NYCMap: React.FC<NYCMapProps> = ({ geographicData, onBoroughSelect }) => {
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

  const onEachFeature = (feature: any, layer: any) => {
    const boroughName = feature.properties.name;
    const data = getBoroughData(boroughName);
    
    // Style the feature
    layer.setStyle({
      fillColor: getBoroughColor(boroughName),
      weight: 2,
      opacity: 1,
      color: '#1F2937',
      dashArray: '',
      fillOpacity: selectedBorough === boroughName ? 0.8 : 0.6
    });

    // Add hover effects
    layer.on({
      mouseover: (e: any) => {
        const layer = e.target;
        layer.setStyle({
          weight: 3,
          color: '#666',
          dashArray: '',
          fillOpacity: 0.8
        });
      },
      mouseout: (e: any) => {
        const layer = e.target;
        layer.setStyle({
          weight: 2,
          color: '#1F2937',
          dashArray: '',
          fillOpacity: selectedBorough === boroughName ? 0.8 : 0.6
        });
      },
      click: (e: any) => {
        const newSelection = selectedBorough === boroughName ? null : boroughName;
        setSelectedBorough(newSelection);
        if (onBoroughSelect) {
          onBoroughSelect(newSelection || '');
        }
      }
    });

    // Add popup with data
    if (data) {
      const popupContent = `
        <div style="min-width: 200px;">
          <h3 style="margin: 0 0 10px 0; color: #1F2937; font-size: 16px; font-weight: bold;">${boroughName}</h3>
          <div style="margin-bottom: 8px;">
            <span style="color: #6B7280; font-size: 12px;">Members:</span>
            <span style="color: #1F2937; font-weight: 500; margin-left: 8px;">${formatNumber(data.memberCount)}</span>
          </div>
          <div style="margin-bottom: 8px;">
            <span style="color: #6B7280; font-size: 12px;">Chronic Rate:</span>
            <span style="color: #1F2937; font-weight: 500; margin-left: 8px;">${data.chronicConditionRate}%</span>
          </div>
          <div style="margin-bottom: 8px;">
            <span style="color: #6B7280; font-size: 12px;">Avg PMPM:</span>
            <span style="color: #1F2937; font-weight: 500; margin-left: 8px;">${formatCurrency(data.averagePMPM)}</span>
          </div>
          <div style="border-top: 1px solid #E5E7EB; padding-top: 8px; margin-top: 8px;">
            <div style="color: #6B7280; font-size: 11px; margin-bottom: 4px;">Top Conditions:</div>
            <div style="color: #6B7280; font-size: 11px;">${data.topConditions.join(', ')}</div>
          </div>
        </div>
      `;
      layer.bindPopup(popupContent);
    }
  };

  return (
    <div className="relative w-full h-96 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <MapContainer
        center={[40.7128, -74.0060]}
        zoom={11}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        {/* Base map tiles - using OpenStreetMap for detailed road networks */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* NYC Borough boundaries */}
        <GeoJSON
          data={nycBoroughsGeoJSON}
          onEachFeature={onEachFeature}
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

import React, { useState, useCallback } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

interface GoogleMapsNYCProps {
  geographicData: any[];
  onBoroughSelect?: (borough: string) => void;
}

// NYC Borough boundaries with real coordinates
const NYC_BOROUGHS = {
  'Manhattan': {
    bounds: {
      north: 40.8176,
      south: 40.7047,
      east: -73.9442,
      west: -74.0479
    },
    center: { lat: 40.7589, lng: -73.9851 },
    color: '#10B981'
  },
  'Brooklyn': {
    bounds: {
      north: 40.7395,
      south: 40.5707,
      east: -73.8339,
      west: -74.0421
    },
    center: { lat: 40.6782, lng: -73.9442 },
    color: '#3B82F6'
  },
  'Queens': {
    bounds: {
      north: 40.8004,
      south: 40.5431,
      east: -73.7004,
      west: -74.0421
    },
    center: { lat: 40.7282, lng: -73.7949 },
    color: '#8B5CF6'
  },
  'Bronx': {
    bounds: {
      north: 40.9176,
      south: 40.7855,
      east: -73.7654,
      west: -73.9339
    },
    center: { lat: 40.8448, lng: -73.8648 },
    color: '#F59E0B'
  },
  'Staten Island': {
    bounds: {
      north: 40.6514,
      south: 40.4774,
      east: -74.0421,
      west: -74.2591
    },
    center: { lat: 40.5795, lng: -74.1502 },
    color: '#EF4444'
  }
};

const MapComponent: React.FC<{
  onBoroughSelect?: (borough: string) => void;
  geographicData: any[];
}> = ({ onBoroughSelect, geographicData }) => {
  const [selectedBorough, setSelectedBorough] = useState<string | null>(null);

  const mapRef = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      const mapInstance = new google.maps.Map(node, {
        center: { lat: 40.7128, lng: -74.0060 }, // NYC center
        zoom: 10,
        styles: [
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#3B82F6' }, { lightness: 20 }]
          },
          {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [{ color: '#E5E7EB' }]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#6B7280' }]
          },
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          },
          {
            featureType: 'transit',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          }
        ],
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.TOP_RIGHT
        }
      });

      // Create InfoWindow
      const infoWindowInstance = new google.maps.InfoWindow();

      // Add borough overlays
      
      Object.entries(NYC_BOROUGHS).forEach(([boroughName, boroughData]) => {
        const rectangle = new google.maps.Rectangle({
          bounds: new google.maps.LatLngBounds(
            { lat: boroughData.bounds.south, lng: boroughData.bounds.west },
            { lat: boroughData.bounds.north, lng: boroughData.bounds.east }
          ),
          fillColor: boroughData.color,
          fillOpacity: 0.3,
          strokeColor: '#1F2937',
          strokeWeight: 2,
          clickable: true
        });

        rectangle.setMap(mapInstance);

        // Add click listener
        rectangle.addListener('click', () => {
          const newSelection = selectedBorough === boroughName ? null : boroughName;
          setSelectedBorough(newSelection);
          
          if (onBoroughSelect) {
            onBoroughSelect(newSelection || '');
          }

          // Update rectangle appearance
          rectangle.setOptions({
            fillOpacity: newSelection ? 0.6 : 0.3,
            strokeWeight: newSelection ? 3 : 2
          });

          // Show info window
          const data = geographicData.find(d => d.location === boroughName);
          if (data && newSelection) {
            const content = `
              <div style="padding: 15px; min-width: 250px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                <h3 style="margin: 0 0 15px 0; color: #1F2937; font-size: 18px; font-weight: 600;">${boroughName}</h3>
                <div style="font-size: 14px; line-height: 1.6; color: #374151;">
                  <div style="margin-bottom: 8px;"><strong style="color: #1F2937;">Members:</strong> <span style="color: #059669;">${data.memberCount.toLocaleString()}</span></div>
                  <div style="margin-bottom: 8px;"><strong style="color: #1F2937;">Chronic Rate:</strong> <span style="color: #DC2626;">${data.chronicConditionRate}%</span></div>
                  <div style="margin-bottom: 12px;"><strong style="color: #1F2937;">Avg PMPM:</strong> <span style="color: #2563EB;">$${data.averagePMPM.toFixed(2)}</span></div>
                  <div style="border-top: 1px solid #E5E7EB; padding-top: 12px;">
                    <div style="font-weight: 600; color: #1F2937; margin-bottom: 6px;">Top Conditions:</div>
                    <div style="font-size: 13px; color: #6B7280; line-height: 1.4;">${data.topConditions.join(', ')}</div>
                  </div>
                </div>
              </div>
            `;
            
            infoWindowInstance.setContent(content);
            infoWindowInstance.setPosition(boroughData.center);
            infoWindowInstance.open(mapInstance);
          } else {
            infoWindowInstance.close();
          }
        });

        // Add borough label marker
        new google.maps.Marker({
          position: boroughData.center,
          map: mapInstance,
          title: boroughName,
          label: {
            text: boroughName,
            color: '#1F2937',
            fontSize: '14px',
            fontWeight: 'bold',
            className: 'borough-label'
          },
          icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
              <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker id="transparent" markerWidth="1" markerHeight="1" refX="0" refY="0">
                    <rect width="1" height="1" fill="transparent"/>
                  </marker>
                </defs>
              </svg>
            `),
            scaledSize: new google.maps.Size(0, 0),
            anchor: new google.maps.Point(0, 0)
          }
        });
      });
    }
  }, [selectedBorough, onBoroughSelect, geographicData]);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

const render = (status: Status): React.ReactElement => {
  switch (status) {
    case Status.LOADING:
      return (
        <div className="flex items-center justify-center h-96 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500 mx-auto mb-2"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading Google Maps...</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              Please wait while we load the real NYC map
            </p>
          </div>
        </div>
      );
    case Status.FAILURE:
      return (
        <div className="flex items-center justify-center h-96 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <div className="text-center">
            <div className="text-red-500 text-4xl mb-2">⚠️</div>
            <p className="text-gray-600 dark:text-gray-400">Failed to load Google Maps</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              Please check your Google Maps API key
            </p>
            <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Setup Required:</strong> Add your Google Maps API key to the environment variables
              </p>
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="flex items-center justify-center h-96 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">Initializing map...</p>
          </div>
        </div>
      );
  }
};

const GoogleMapsNYC: React.FC<GoogleMapsNYCProps> = ({ geographicData, onBoroughSelect }) => {
  // You need to add your Google Maps API key here
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY';

  return (
    <div className="relative w-full rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden bg-gray-100 dark:bg-gray-800">
      {/* Map Title */}
      <div className="absolute top-2 left-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-2 shadow-lg z-10">
        <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
          🗺️ Real NYC Map
        </div>
      </div>

      {/* Borough Legend */}
      <div className="absolute bottom-2 left-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-2 shadow-lg z-10">
        <h4 className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">NYC Boroughs</h4>
        <div className="flex flex-wrap gap-1 text-xs">
          {Object.entries(NYC_BOROUGHS).map(([borough, data]) => (
            <div key={borough} className="flex items-center gap-1">
              <div 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: data.color }}
              ></div>
              <span className="text-gray-600 dark:text-gray-400 text-xs">{borough}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute top-2 right-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-2 shadow-lg z-10">
        <div className="text-xs text-gray-600 dark:text-gray-400">
          Click boroughs for data
        </div>
      </div>

      <Wrapper apiKey={apiKey} render={render}>
        <MapComponent onBoroughSelect={onBoroughSelect} geographicData={geographicData} />
      </Wrapper>
    </div>
  );
};

export default GoogleMapsNYC;

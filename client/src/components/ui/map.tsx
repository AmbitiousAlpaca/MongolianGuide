import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Destination } from '@/lib/destinations';

interface MapProps {
  destinations: Destination[];
  selectedDestinations: Destination[];
  onSelectDestination: (destination: Destination) => void;
  onViewDestinationDetails: (destination: Destination) => void;
}

export function MapComponent({
  destinations,
  selectedDestinations,
  onSelectDestination,
  onViewDestinationDetails,
}: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<L.Map | null>(null);
  const markersRef = useRef<{[key: number]: L.Marker}>({});

  useEffect(() => {
    // Create map instance when component mounts
    if (mapRef.current && !leafletMap.current) {
      // Center on Mongolia
      leafletMap.current = L.map(mapRef.current).setView([46.8625, 103.8467], 5);

      // Add tile layer (map background)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(leafletMap.current);

      // Add destination markers
      destinations.forEach(destination => {
        const isSelected = selectedDestinations.some(d => d.id === destination.id);
        
        // Create custom icon
        const customIcon = L.divIcon({
          className: 'custom-div-icon',
          html: `<div class="marker-pin ${isSelected ? 'selected' : ''}">
                   <span>${destination.id}</span>
                 </div>`,
          iconSize: [30, 30],
          iconAnchor: [15, 15]
        });
        
        // Create marker
        const marker = L.marker(destination.position, { icon: customIcon })
          .addTo(leafletMap.current!);
        
        // Add click handler
        marker.on('click', () => {
          onViewDestinationDetails(destination);
        });
        
        // Store marker reference
        markersRef.current[destination.id] = marker;
      });
    }
    
    return () => {
      if (leafletMap.current) {
        leafletMap.current.remove();
        leafletMap.current = null;
      }
    };
  }, []);

  // Update marker styles when selection changes
  useEffect(() => {
    if (leafletMap.current) {
      destinations.forEach(destination => {
        const marker = markersRef.current[destination.id];
        if (marker) {
          const isSelected = selectedDestinations.some(d => d.id === destination.id);
          
          // Update marker icon based on selection state
          const customIcon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div class="marker-pin ${isSelected ? 'selected' : ''}">
                     <span>${destination.id}</span>
                   </div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 15]
          });
          
          marker.setIcon(customIcon);
        }
      });
    }
  }, [selectedDestinations]);

  return (
    <div className="relative h-[500px] rounded-lg shadow-md overflow-hidden bg-white">
      <div ref={mapRef} className="h-full w-full z-0" />
      
      <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-md shadow-md z-10">
        <div className="text-sm">
          <p className="font-medium text-secondary">Click on markers to select destinations</p>
          <p className="text-neutral-dark/70">
            Selected: <span id="selected-count">{selectedDestinations.length}</span> destinations
          </p>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .marker-pin {
          width: 24px;
          height: 24px;
          background-color: #D35400;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid white;
          color: white;
          font-weight: bold;
          font-size: 12px;
        }
        
        .marker-pin.selected {
          background-color: #2C3E50;
          transform: scale(1.2);
        }
      `}} />
    </div>
  );
}

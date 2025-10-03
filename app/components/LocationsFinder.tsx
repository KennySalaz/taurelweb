import React, { useState } from 'react';
import LocationsMap from './LocationsMap';
import '../styles/locations-finder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';

interface Location {
  id: string;
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  phone?: string;
  email?: string;
  schedule?: string;
}

// Ubicaciones de ejemplo (reemplázalas con las ubicaciones reales cuando las tengas)
const sampleLocations: Location[] = [
  {
    id: '1',
    name: 'Taurel Oficina Central',
    address: 'Torre Q, Piso 2 Ofic. 2018, Carretera de Alto Hatillo, Miranda',
    coordinates: { lat: 10.421543, lng: -66.824137 },
    phone: '+58 212 123 4567',
    email: 'info@taurel.com',
    schedule: 'Lun-Vie: 8:00 AM - 6:00 PM'
  },
  {
    id: '2',
    name: 'Taurel Almacén Principal',
    address: 'Zona Industrial, Galpón 15, Calle Principal, Caracas',
    coordinates: { lat: 10.461212, lng: -66.883214 },
    phone: '+58 212 234 5678',
    schedule: 'Lun-Vie: 7:00 AM - 4:00 PM, Sáb: 8:00 AM - 12:00 PM'
  },
  {
    id: '3',
    name: 'Taurel Centro Logístico',
    address: 'Av. Intercomunal, Centro Empresarial, Torre B, Piso 3, Valencia',
    coordinates: { lat: 10.176445, lng: -67.998541 },
    phone: '+58 241 345 6789',
    schedule: 'Lun-Vie: 8:00 AM - 5:00 PM'
  },
  {
    id: '4',
    name: 'Taurel Puerto Marítimo',
    address: 'Terminal Marítima, Zona Portuaria, La Guaira',
    coordinates: { lat: 10.599294, lng: -66.932928 },
    phone: '+58 212 456 7890',
    schedule: '24 horas, todos los días'
  },
  {
    id: '5',
    name: 'Taurel Oficina Maracaibo',
    address: 'Centro Comercial Lago Mall, Piso 2, Local 45, Maracaibo',
    coordinates: { lat: 10.667564, lng: -71.623129 },
    phone: '+58 261 567 8901',
    email: 'maracaibo@taurel.com',
    schedule: 'Lun-Vie: 8:30 AM - 5:30 PM'
  }
];

interface LocationsFinderProps {
  googleMapsApiKey: string;
}

const LocationsFinder: React.FC<LocationsFinderProps> = ({ googleMapsApiKey }) => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [term, setTerm] = useState('');

  return (
    <div className="map-component">
      {/* Card blanco con panel a la izquierda y mapa a la derecha */}
      <div className="map-component-card">
        <LocationsMap
          apiKey={googleMapsApiKey}
          locations={sampleLocations}
          onSelectLocation={setSelectedLocation}
          searchTerm={term}
          onSearchChange={setTerm}
          hideSearch={false}
          panelMode="list"
        />
      </div>

      {/* Opcional: detalles ampliados bajo el card si se requiere */}
      {selectedLocation && (
        <div className="selected-location-details">
          <h3>{selectedLocation.name}</h3>
          <div className="details-grid">
            <div className="detail-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="detail-icon" />
              <p>{selectedLocation.address}</p>
            </div>
            {selectedLocation.phone && (
              <div className="detail-item">
                <FontAwesomeIcon icon={faPhone} className="detail-icon" />
                <p>{selectedLocation.phone}</p>
              </div>
            )}
            {selectedLocation.email && (
              <div className="detail-item">
                <FontAwesomeIcon icon={faEnvelope} className="detail-icon" />
                <p>{selectedLocation.email}</p>
              </div>
            )}
            {selectedLocation.schedule && (
              <div className="detail-item">
                <FontAwesomeIcon icon={faClock} className="detail-icon" />
                <p>{selectedLocation.schedule}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationsFinder;
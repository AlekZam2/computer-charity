import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const MapComponent = () => {
  const position = [53.6458, -1.7785];
  const customIcon = new L.Icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41], // Default Leaflet icon size
    iconAnchor: [12, 41], // Center bottom anchor
    popupAnchor: [1, -34], // Popup position
  });

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "250px", width: "400px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>Here is the location!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;

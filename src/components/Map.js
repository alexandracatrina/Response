import romaniaMap from '../img/romania-map.png';
import mapImage from './images/mapImage.png';
import './Map.css';



function Map() {
  return (
    <div className="map-container">
      <img src={mapImage} alt="Harta proiecte" className="map-image" />
    </div>
  );
}

export default Map;

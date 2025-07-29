import './CourtCard.css';
import { Link } from 'react-router-dom';

export default function CourtCard({ court }) {
  return (
    <div className="court-card ml-5">
      <img src={court.image} alt={court.name} className="court-image" />
      <div className="court-info">
        <h3>{court.name}</h3>
        <p>{court.sport} - {court.location}</p>
        <Link to={`/court/${court.id}`} className="book-btn">View Details</Link>
      </div>
    </div>
  );
}

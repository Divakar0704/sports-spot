import { Link } from "react-router-dom";

export default function DashboardCard({ title, number, description, buttonText, icon, onClick, link = "#" }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-full text-left">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      
      {number !== undefined && (
        <p className="text-3xl font-bold text-green-400 mb-1">{number}</p>
      )}

      <p className="text-gray-500 mb-4">{description}</p>

      <Link to={link}>
        <button
          onClick={ onClick }
          className="bg-gray-900 text-white px-4 py-2 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition"
        >
          
          {icon && <span>{icon}</span>}
          {buttonText}
        </button>
      </Link>
    </div>
  );
}

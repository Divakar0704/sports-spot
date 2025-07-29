export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-auto mt-5">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start gap-10">

        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold">Sport<span className="text-green-400">Spot</span></h2>
          <p className="text-sm text-gray-400">Book your game spot. Anytime. Anywhere.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-gray-400 space-y-1">
            <li><a href="#" className="hover:text-green-400">Find Courts</a></li>
            <li><a href="#" className="hover:text-green-400">List Your Court</a></li>
            <li><a href="#" className="hover:text-green-400">My Bookings</a></li>
            <li><a href="#" className="hover:text-green-400">Help Center</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <ul className="text-gray-400 space-y-1">
            <li>support@sportspot.com</li>
            <li>+1 (555) 123-4567</li>
            <li>Available 24/7</li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © 2025 SportSpot. All rights reserved.
      </div>
    </footer>
  );
}

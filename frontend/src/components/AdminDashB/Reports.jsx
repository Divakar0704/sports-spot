// Reports.jsx

export default function Reports() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Revenue Report */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Revenue Report</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">This Month</span>
            <span className="font-medium">₹15,420</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Last Month</span>
            <span className="font-medium">₹13,250</span>
          </div>
          <div className="flex justify-between text-green-600 font-medium">
            <span>Growth</span>
            <span>+16.4%</span>
          </div>
        </div>
      </div>

      {/* Popular Sports */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Popular Sports</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Cricket</span>
            <span className="font-bold text-black">45%</span>
          </div>
          <div className="flex justify-between">
            <span>Football</span>
            <span className="font-bold text-black">28%</span>
          </div>
          <div className="flex justify-between">
            <span>Tennis</span>
            <span className="font-bold text-black">27%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

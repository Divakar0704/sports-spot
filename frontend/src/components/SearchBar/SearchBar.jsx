export default function SearchBar(){
 return (
    <>
        <div className="search-box flex items-center bg-white border-1 border-gray-500 rounded-full px-4 py-1.5 shadow-sm w-full max-w-md">
  <i className="fa-solid fa-magnifying-glass text-gray-400 mr-3"></i>
  <label htmlFor="search" className="sr-only">Search</label>
  <input 
    type="search" 
    placeholder="Search courts, locations..." 
    className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
  />
</div>
    </>
  );
}
import './Home.css';
import CourtCard from '../../components/courtCard/CourtCard';
import GetStarted from '../../components/GetStarted/GetStarted';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';
import Navbar from '../../components/Navbar/Navbar';

export default function HomeSection() {
  const courts = [
    {
      id: 1,
      name: 'Cricket Box - Arena 91',
      location: 'Visakhapatnam',
      sport: 'Box Cricket',
      image: '/cricket.png'
    },
    {
      id: 2,
      name: 'Smash Badminton Club',
      location: 'Hyderabad',
      sport: 'Badminton',
      image: '/badminton.png'
    },
    {
      id: 3,
      name: 'Goal Turf Arena',
      location: 'Bengaluru',
      sport: 'Football Turf',
      image: '/football.png'
    }
  ];

  return (
    <>
    <Navbar />
    <div className="home-container">
      <section className="hero-section">
        <h1><span className='text-black font-bold text-6xl'>Find & Book Sports Courts <br /><span className='text-green-400'>Near You</span> </span></h1>
        <p>Discover amazing sports courts in your area. From cricket grounds <br />to tennis courts, book your perfect playing spot in seconds.</p>
        
        <div className="search-space flex justify-center mt-5 gap-10">

        <SearchBar />

        <button className='cursor-pointer rounded-4xl px-6 text-gray-50 text-sm font-medium bg-black'><i className="fa-solid fa-magnifying-glass text-gray-300 mr-3"></i>Search courts</button>
        </div>
        <div className="flexing flex justify-center gap-10 p-5 ">
          <p>
          1000+ <br />Courts Available
        </p>
        <hr className='w-auto h-auto border-1 border-gray-400' />
        <p>
          50+ <br />Cities Covered
        </p>
        <hr className='w-auto h-auto border-1 border-gray-400' />
        <p>
          5k+ <br />new Players
        </p>
        </div>
      </section>


<div className="heading flex items-center justify-center mb-9">

    <h1><span className='text-4xl font-semibold'>Our Featured Courts</span></h1>

</div>
      <section className="cards-section ">
        {courts.map(court => (
          <CourtCard key={court.id} court={court} />
        ))}
      </section>

<GetStarted />

</div>
<Footer />
        </>



    
  );
}

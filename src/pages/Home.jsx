import logo from '../assets/logo.png';
import hero from '../assets/hero.png';
import { Link } from 'react-router-dom';
import { useState } from 'react'; 
import {coffeeData} from '../data/coffeeData.js'
import SearchBar from '../components/SearchBar.jsx';
import Cards from '../components/Cards.jsx';


const Home = () => {
    
    const[selectedId, setSelectedId] = useState(undefined);
    const selectedCoffee = coffeeData.find((coffee) => coffee.id === selectedId);

    return (
        <div>
        <header className='flex justify-between items-center p-5 shadow-md '>
            <div className='flex items-center justify-between mx-4 space-x-3'>
                <img src={logo} alt="logo" />
                <h1 className='font-semibold text-2xl '>BrewQuest</h1>
            </div>
            <nav className='flex items-center justify-center space-x-10 mx-7'>
                <Link>Shop</Link>
                <Link>Learn More</Link>
                <Link>Locations</Link>
                <button className='bg-[#F2EDE8] py-2 px-6 rounded-lg hover:bg-[#e5dbd1]'>Cart</button>
            </nav>
        </header>

        <main>
            <div className='flex justify-center items-center my-15 mx-auto max-w-4xl '>
                <img src={hero} alt="" />
            </div>

            <SearchBar />
            
            <div className='mx-auto max-w-4xl'>
            <h2 className='font-semibold text-xl my-10 '>Explore our coffee</h2>
                <div className='grid grid-cols-3 gap-10'>
                {coffeeData.map((coffee) => (
                    <div key={coffee.id} onClick={() => setSelectedId(coffee.id)}>
                       <Cards
                        title={coffee.name}
                        description={coffee.description}
                        img={coffee.image} /> 
                    </div>
                    ))}
                </div>
                </div>
            
            {/*MODAL*/}
            {selectedCoffee && (
                <div className='fixed inset-0 flex justify-center bg-black bg-opacity-50'>
                    <div className='bg-white rounded-lg p-6 max-w-md w-full relative shadow-lg'>   
                        <button 
                            className='absolute top-2 right-2 text-gray-500 hover:text-gray-500 text-xl'
                            onClick={() => setSelectedId(null)}
                            >
                                Close
                        </button>

                       <Cards 
                        title={selectedCoffee.name}
                        description={selectedCoffee.description}
                        img={selectedCoffee.image} />
                    </div>
                </div>
            )}
        </main>
        </div>
    )
}

export default Home;
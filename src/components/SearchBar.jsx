
import search from '../assets/search.png';

const SearchBar = ( {searchTerm, setSearchTerm} ) => {

    
    return (
        <div className='relative flex justify-center w-full max-w-4xl mx-auto'>
            <input
                className='pl-12 py-3 rounded-lg bg-[#F2EDE8] w-full focus:outline-none focus:ring-4 focus:ring-[#FFFDD0]'
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder='Search for coffee'
                />
            <img 
                className='absolute left-3 bottom-1/4 pointer-events-none opacity-60'
                src={search}
                alt="search" />
        </div>

    )
}

export default SearchBar;
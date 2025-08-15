import logo from '../assets/logo.png';
import hero from '../assets/hero.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'; 
import {coffeeData} from '../data/coffeeData.js'
import SearchBar from '../components/SearchBar.jsx';
import Cards from '../components/Cards.jsx';
import ViewOrdersModal from '../components/ViewOrdersModal.jsx';
import ToastNotification from '../components/ToastNotification.jsx';
import { useStore } from '../store/orderStore';

const Home = () => {
    
    const [selectedId, setSelectedId] = useState(undefined);
    const selectedCoffee = coffeeData.find((coffee) => coffee.id === selectedId);
    const [price, setPrice] = useState(0);
    // Local UI state for redesigned modal
    const [selectedOption, setSelectedOption] = useState('Service');
    const [quantity, setQuantity] = useState(1);
    // State for view orders modal
    const [isViewOrdersOpen, setIsViewOrdersOpen] = useState(false);
    // State for toast notifications
    const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
   
    const [searchTerm, setSearchTerm] = useState('');

    const [selectedCategory, setSelectedCategory] = useState('All');

    // Reset option/quantity when opening a new coffee
    useEffect(() => {
        if (selectedCoffee) {
            setSelectedOption('Service');
            setQuantity(1);
        }
    }, [selectedCoffee]);

    // Close on Escape key and lock scroll when modal is open
    useEffect(() => {
        if (!selectedCoffee) return;

        const onKeyDown = (event) => {
            if (event.key === 'Escape') setSelectedId(null);
        };
        document.addEventListener('keydown', onKeyDown);
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = originalOverflow;
        };
    }, [selectedCoffee]);

    //DESTRUCTURING THE ORDER OBJ in useStore
    const {addOrder,orders} = useStore();

    const servingOption = ['Service', 'Self Service'];

    const handleOrder = () => {
        try {
            addOrder(selectedCoffee, selectedCoffee.price, quantity, selectedOption);
            
            // Show success notification
            setToast({
                show: true,
                message: `Successfully added ${quantity} ${quantity === 1 ? 'cup' : 'cups'} of ${selectedCoffee.name} to your cart!`,
                type: 'success'
            });
            
            // Close the modal after successful order
            setSelectedId(null);
        } catch (error) {
            // Show error notification
            setToast({
                show: true,
                message: 'Failed to add order. Please try again.',
                type: 'error'
            });
        }
    }



    useEffect(() => {
        //prevent errors when modal closed
        if(selectedCoffee) {
            const totalPrice = selectedCoffee.price * quantity;
            const rounded = totalPrice.toFixed(2);
            setPrice(rounded);
            return;
        }
       
        
    }, [selectedCoffee , quantity]);

    //SEARCH FUNCTIONALITY
    const searchedItems = coffeeData.filter(coffee => 
        coffee.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    //FILTER ITEMS BASED ON SELECTED CATEGORY
    const filteredItems =
    selectedCategory === 'All' 
        ? searchedItems
        : searchedItems.filter(item => item.categories === selectedCategory);

    //FILTERED BTNS
    const categories = ['All', 'Coffee', 'Desserts'];

    return (
        <div>
        <header className='sticky top-0 z-50 bg-white flex justify-between items-center p-5 shadow-md '>
            <div className='flex items-center justify-between mx-4 space-x-3'>
                <img src={logo} alt="logo" />
                <h1 className='font-semibold text-2xl '>BrewQuest</h1>
            </div>
            <nav className='flex items-center justify-center space-x-10 mx-7'>
                <Link>Shop</Link>
                <Link>Learn More</Link>
                <Link>Locations</Link>
                <button 
                    onClick={() => setIsViewOrdersOpen(true)}
                    className='bg-[#F2EDE8] py-2 px-6 rounded-lg hover:bg-[#e5dbd1] flex items-center space-x-2'
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span>Cart ({orders.length})</span>
                </button>
            </nav>
        </header>

        <main>
            <div className='flex justify-center items-center my-15 mx-auto max-w-4xl '>
                <img src={hero} alt="" />
            </div>

            <SearchBar 
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}/>
            
            <div className='mx-auto max-w-4xl'>
            <h2 className='font-semibold text-xl my-10 '>Explore our coffee</h2>
             <div className="flex gap-2 mb-4">
                {categories.map((category) => (
                    <button 
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`pb-1 border-b-2 transition-colors duration-200
                            ${selectedCategory === category 
                                ? "border-b-amber-600 text-amber-600 font-semibold" // active category
                                : "border-b-transparent text-gray-600 hover:text-amber-600"}`
                        }>
                            {category}
                    </button>
                ))}        
            </div>
                <div className='grid grid-cols-3 gap-10'>
                {filteredItems.length > 0 ? (
                    filteredItems.map((coffee) => (
                    <div key={coffee.id} onClick={() => setSelectedId(coffee.id)}>
                       <Cards
                        title={coffee.name}
                        description={coffee.description}
                        img={coffee.image} /> 
                    </div>
                    ))
                    ) : (
                        <div className='text-center py-12'>
                            <div className='bg-white rounded-lg shadow-sm p-8'>
                                <p className='text-xl text-red-500'>No cards found!</p>
                                <p className='text-gray-400 mt-2'>Try adjusting your search terms</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Redesigned Modal */}
            {selectedCoffee && (
                <div
                    className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4'
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setSelectedId(null);
                    }}
                >
                    <div
                        role='dialog'
                        aria-modal='true'
                        aria-labelledby='coffee-modal-title'
                        className='relative w-[min(92vw,900px)] rounded-2xl bg-white shadow-2xl'
                    >
                        {/* Close button */}
                        <button 
                            aria-label='Close'
                            className='absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white/90 text-gray-600 shadow-sm transition hover:bg-gray-50 hover:text-gray-800'
                            onClick={() => setSelectedId(null)}
                            >
                            ×
                        </button>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-2xl'>
                            {/* Image */}
                            <div className='relative bg-gray-50 md:min-h-[420px] height-[420px]'>
                                <img
                                    src={selectedCoffee.image}
                                    alt={selectedCoffee.name}
                                    className='h-full w-full object-cover'
                                />
                                <div className='pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent' />
                            </div>

                            {/* Content */}
                            <div className='p-6 md:p-8'>
                                <h2 id='coffee-modal-title' className='text-2xl font-semibold tracking-tight text-gray-900'>
                                    {selectedCoffee.name}
                                </h2>
                                <p className='mt-2 text-sm leading-relaxed text-gray-600'>
                                    {selectedCoffee.description}
                                </p>

                                <div className='mt-4 flex items-baseline gap-2'>
                                    <span className='text-xl font-semibold text-[#e88a31]'>${selectedCoffee.price}</span>
                                    <span className='text-xs text-gray-400'>/ cup</span>
                                </div>

                                {/* Options */}
                                <div className='mt-6'>
                                    <h3 className='mb-3 text-sm font-medium text-gray-800'>Serving option</h3>
                                    <div className='inline-flex rounded-lg border border-gray-200 bg-white p-1 shadow-sm'>
                                        {servingOption.map((option) => (
                                            <button
                                                key={option}
                                                type='button'
                                                onClick={() => setSelectedOption(option)}
                                                className={`px-4 py-2 text-sm font-medium rounded-md transition ${
                                                    selectedOption === option
                                                        ? 'bg-[#F2EDE8] text-gray-900'
                                                        : 'text-gray-600 hover:bg-gray-50'
                                                }`}
                                                aria-pressed={selectedOption === option}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Quantity */}
                                <div className='mt-5'>
                                    <h3 className='mb-3 text-sm font-medium text-gray-800'>Quantity</h3>
                                    <div className='inline-flex items-center rounded-lg border border-gray-200 bg-white shadow-sm'>
                                        <button
                                            type='button'
                                            className='px-3 py-2 text-gray-600 hover:bg-gray-50'
                                            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                            aria-label='Decrease quantity'
                                        >
                                            −
                                        </button>
                                        <span className='min-w-[3rem] text-center text-sm font-medium text-gray-900'>
                                            {quantity}
                                        </span>
                                        <button
                                            type='button'
                                            className='px-3 py-2 text-gray-600 hover:bg-gray-50'
                                            onClick={() => setQuantity((q) => q + 1)}
                                            aria-label='Increase quantity'
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                
                                {/*TOTAL QUANTITY*/}
                                <div className='mt-6 flex flex-col gap-3 '>
                                    <h3 className=' text-sm font-medium text-gray-800'>Total: </h3>
                                    <span className='text-xl font-semibold text-[#e88a31]'> ${price}</span>
                                    <button className='inline-flex w-full items-center justify-center rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700 transition hover:bg-red-100'
                                            onClick={handleOrder}
                                        >
                                        Place Order 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* View Orders Modal */}
            <ViewOrdersModal 
                isOpen={isViewOrdersOpen}
                onClose={() => setIsViewOrdersOpen(false)}
                onShowNotification={setToast}
            />

            {/* Toast Notification */}
            <ToastNotification
                message={toast.message}
                type={toast.type}
                isVisible={toast.show}
                onClose={() => setToast({ ...toast, show: false })}
                duration={4000}
            />
        </main>
        </div>
    )
}

export default Home;
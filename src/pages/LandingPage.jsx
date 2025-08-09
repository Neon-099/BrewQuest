import logo from '../assets/logo.png';
import email from '../assets/email.png';
import heroBg from '../assets/heroBg.png';

const LandingPage = () => {
    return (
        <div>
            <header className='flex justify-between items-center p-5 shadow-md max-w-full mx-auto'>
                <div className='flex items-center justify-between mx-4 space-x-3'>
                   <img src={logo} alt="logo" /> 
                   <h1 className='font-semibold text-2xl'>Brew Quest</h1>
                </div>

                <nav className='flex items-center space-x-5 mx-6'>
                    <button>Shop</button>
                    <button className=' p-2 px-4 font-semibold rounded-md bg-[#F2EDE8]'>Sign In</button>
                    <button className='p-3 rounded-md bg-[#F2EDE8]'><img src={email} alt="email" /></button>
                </nav>
            </header>

            <main >
                {/* Hero Section with Image Background and Text Overlay */}
                <section className="relative h-200 w-[1200px] mx-auto my-15 rounded-md flex items-center justify-center overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-black">
                        <img 
                            src={heroBg}
                            alt="Coffee beans background" 
                            className="w-full h-full object-cover opacity-60"
                        />
                    </div>
                    
                    {/* Text Content Overlay */}
                    <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Welcome to Our Coffee World
                        </h1>
                        <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto opacity-90">
                            Explore our curated selection of premium coffee beans, brewing equipment, and accessories. 
                            Discover the perfect blend for your taste and elevate your coffee experience.
                        </p>
                        <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105">
                            Shop Now
                        </button>
                    </div>
                </section>

                {/* Why Choose Brew Bliss Section */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
                            Why Choose Brew Quest?
                        </h2>
                        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                            We are committed to providing the highest quality coffee and exceptional service.
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Premium Quality */}
                            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                                <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-800">Premium Quality</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Our coffee beans are sourced from the best farms around the world, ensuring 
                                    a rich and flavorful experience.
                                </p>
                            </div>

                            {/* Fast Delivery */}
                            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                                <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-800">Fast Delivery</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Enjoy fast and reliable delivery right to your doorstep, so you never run out of 
                                    your favorite coffee.
                                </p>
                            </div>

                            {/* Sustainable Practices */}
                            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                                <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-800">Sustainable Practices</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We are dedicated to sustainable and ethical sourcing, supporting farmers 
                                    and protecting the environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-800 text-white py-12 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-4 gap-8 mb-8">
                            <div>
                                <div className="flex items-center space-x-3 mb-4">
                                    <img src={logo} alt="logo" className="w-8 h-8" /> 
                                    <h3 className="text-xl font-semibold">Brew Quest</h3>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Quick Links</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li><a href="#" className="hover:text-amber-400 transition-colors">About Us</a></li>
                                    <li><a href="#" className="hover:text-amber-400 transition-colors">Contact</a></li>
                                    <li><a href="#" className="hover:text-amber-400 transition-colors">FAQ</a></li>
                                    <li><a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Categories</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li><a href="#" className="hover:text-amber-400 transition-colors">Coffee Beans</a></li>
                                    <li><a href="#" className="hover:text-amber-400 transition-colors">Equipment</a></li>
                                    <li><a href="#" className="hover:text-amber-400 transition-colors">Accessories</a></li>
                                    <li><a href="#" className="hover:text-amber-400 transition-colors">Gift Sets</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Follow Us</h4>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
                            <p>&copy;2024 Brew Quest. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    )
}

export default LandingPage;
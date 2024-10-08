import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as Router from "react-router-dom";

const Homepage: React.FC = () => {
  const navigate = Router.useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleScroll = () => {
      const header = document.getElementById('header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('bg-opacity-90', 'shadow-md');
        } else {
          header.classList.remove('bg-opacity-90', 'shadow-md');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-100 ">
      <header className="bg-blue-600 text-white fixed w-full z-10 transition-all duration-300" id="header">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#" className="text-3xl font-bold text-gray-800">LibraryMS</a>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-blue-200 text-black">Home</a>
            <a href="#" className="hover:text-blue-200 text-black">About</a>
            <a href="#" className="hover:text-blue-200 text-black">Contact</a>
          </div>
          <div className="space-x-2">
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition-colors"
              onClick={()=>{
                navigate("/user-dashboard");
              }}
            >Go-to</button>
          </div>
        </nav>
      </header>

      <main >
        <section className="hero bg-blue-500 text-white py-20 md:py-32" style={{backgroundImage:"url('./back.jpg')"}}>
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-right">
                Manage Your Library with Ease
              </h1>
              <p className="text-xl mb-8" data-aos="fade-right" data-aos-delay="200">Streamline your library operations with our powerful management system.</p>
              <button 
                className="bg-gray-400 text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition-colors" data-aos="fade-up" data-aos-delay="400"
                onClick={()=>{
                  navigate("/user-auth");
                }}
              >Get Started</button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src="./library.jpg" alt="Library" className="rounded-lg shadow-lg float" data-aos="fade-left" />
            </div>
          </div>
        </section>

        <section className="features py-16" style={{backgroundImage:"url('./back.jpg')"}}>
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-400 p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
                <img src="./catalog.png" alt="Feature 1" className="w-full h-48 object-contain rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Catalog Management</h3>
                <p className='text-gray-900'>Easily manage and organize your entire book collection.</p>
              </div>
              <div className="bg-gray-400 p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="400">
                <img src="./member.png" alt="Feature 2" className="w-full h-48 object-contain rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Member Management</h3>
                <p className='text-gray-900'>Keep track of library members and their borrowing history.</p>
              </div>
              <div className="bg-gray-400 p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="600">
                <img src="./digital-resources.png" alt="Feature 3" className="w-full h-48 object-contain rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Digital Resources</h3>
                <p className='text-gray-900'>Integrate and manage e-books and digital content seamlessly.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials bg-gray-200 py-16" style={{backgroundImage:"url('./back.jpg')"}}>
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-400 p-6 rounded-lg shadow-md text-blue-500" data-aos="fade-left">
                <p className="mb-4 text-black">"This library management system has revolutionized our workflow. It's user-friendly and efficient!"</p>
                <p className="font-semibold">- Sarah Johnson, Librarian</p>
              </div>
              <div className="bg-gray-400 p-6 rounded-lg shadow-md text-blue-500" data-aos="fade-right">
                <p className="mb-4 text-black">"I love how easy it is to find and borrow books using this system. It's made my library experience so much better!"</p>
                <p className="font-semibold">- Michael Chen, Library Member</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">LibraryMS</h3>
              <p>Empowering libraries worldwide</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-200 text-black">Privacy Policy</a>
              <a href="#" className="hover:text-blue-200 text-black">Terms of Service</a>
              <a href="#" className="hover:text-blue-200 text-black">Contact Us</a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 LibraryMS. All rights reserved.</p>
          </div>
        </div>
      </footer>

    
    </div>
  );
};

export default Homepage;
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
    return(
        <div className="flex flex-col justify-center items-center pt-12">
            <div className="flex flex-row items-center p-5">
                <h1 data-aos="fade-right" data-aos-delay="50" className="md:text-7xl text-4xl md:text-left text-right font-bold nunito-sans p-2">Never Stop</h1>
                <img data-aos="fade-left" data-aos-delay="100" className="hero-img-1 w-60 md:w-96 h-32 object-cover" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbGRyZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className="flex flex-row items-center p-5">
                <img data-aos="fade-right" data-aos-delay="100" className="hero-img-2 md:w-96 w-64 h-32 object-cover" src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGNoaWxkcmVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <h1 data-aos="fade-left" data-aos-delay="50" className="md:text-7xl text-4xl font-bold nunito-sans p-2 text-red-600">Being Kind</h1>
            </div>
            <h2 data-aos="fade-up" data-aos-delay="150" className="text-xl nunito">#BanyakNongskiBanyakPahala</h2>
            <div className="hero-data flex w-64 m-3">
                <div data-aos="fade-up" data-aos-delay="200" className="item-data m-auto flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p className="text-slate-400"><span className="font-bold text-red-600">20+</span> Volunteers</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="250" className="item-data m-auto flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                    <p className="text-slate-400"><span className="font-bold text-red-600">100+</span> Donations</p>
                </div>
            </div>
            <a data-aos="fade-up" data-aos-delay="300" href="#whatWeDo-section" className="bg-red-600 p-2 m-2 w-72 rounded-full text-center text-white hover:drop-shadow-[0_5px_10px_rgba(220,38,38,100)] duration-500" >Explore Now</a>
        </div>
    );
};

AOS.init();
export default Hero;
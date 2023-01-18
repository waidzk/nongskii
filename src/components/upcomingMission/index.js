import AOS from 'aos';
import 'aos/dist/aos.css';

function UpcomingMission(){
    return(
        <div id="process-section" className="upcomingMission p-4 h-full">
          <div className="title text-center m-5 p-8">
              <h1 data-aos="fade-up" data-aos-delay="50" className="text-2xl font-bold nunito-sans">Process of build our project</h1>
          </div>
        <div className="cards-process flex md:flex-row flex-col justify-center nunito">
            <div data-aos="fade-up" data-aos-delay="100" className="card-process bg-red-600 md:w-56 w-full p-4 m-2 md:rounded-t-full md:rounded-b-lg rounded-l-full rounded-r-lg flex items-center md:flex-col flex-row">
                <div className="number-of-process bg-white md:w-48 md:h-48 w-24 h-24 rounded-full p-8 flex justify-center items-center">
                    <h2 className="text-5xl font-bold text-red-600">1</h2>
                </div>
                <div className="description p-1">
                    <h3 className="md:text-2xl text-lg font-bold text-white">Mengumpulkan Donasi</h3>
                    <p className="md:text-base text-sm text-white">Mengumpulkan donasi berupa uang dari internal Nongski maupun dari luar. <a className="font-bold underline" href="https://bit.ly/3sQK07C">Mari Berdonasi!</a></p>
                </div> 
            </div>

            <div data-aos="fade-up" data-aos-delay="150" className="card-process bg-red-600 md:w-56 w-full p-4 m-2 md:rounded-b-full md:rounded-t-lg rounded-r-full rounded-l-lg flex items-center md:flex-col flex-row">
                <div className="description p-1">
                    <h3 className="md:text-2xl text-lg font-bold text-white">Menyusun Rencana</h3>
                    <p className="md:text-base text-sm text-white">Merencanakan segala rencana yang akan dijalani pada saat acara dimulai, walaupun acara-nya main - main.</p>
                </div> 
                <div className="number-of-process bg-white md:w-48 md:h-48 w-24 h-24 rounded-full p-8 flex justify-center items-center">
                    <h2 className="text-5xl font-bold text-red-600">2</h2>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="card-process bg-red-600 md:w-56 w-full p-4 m-2 md:rounded-t-full md:rounded-b-lg rounded-l-full rounded-r-lg flex items-center md:flex-col flex-row">
                <div className="number-of-process bg-white md:w-48 md:h-48 w-24 h-24 rounded-full p-8 flex justify-center items-center">
                    <h2 className="text-5xl font-bold text-red-600">3</h2>
                </div>
                <div className="description p-1">
                    <h3 className="md:text-2xl text-lg font-bold text-white">Start the Project!</h3>
                    <p className="md:text-base text-sm text-white">Kita lebih suka menyebutnya dengan bersenang - senang!</p>
                </div> 
            </div>
        </div>
        </div>
    )
}

AOS.init();
export default UpcomingMission;
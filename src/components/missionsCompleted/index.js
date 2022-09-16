import React from "react";
import 'tw-elements';
import image_ybu from "./../../assets/images/completed/yayasanbaitulummi.jpg";
import image_kppb from "./../../assets/images/completed/kampungpulobambu.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

function MissionsCompleted() {

    return(
        <div id="completed-section" className="flex flex-col items-center missionCompleted rounded-3xl m-0 p-2">
            <div data-aos="fade-up" data-aos-delay="50" className="title text-center m-5 pt-8">
              <h1 className="text-2xl font-bold nunito-sans">Missions Completed</h1>
              <p className="font-xs text-slate-300">Latest</p>
            </div>
            
            <div className="completed-cards flex md:flex-row flex-col justify-center m-0">
              <div data-aos="fade-up" data-aos-delay="100" className="card md:w-64 w-full mx-0 mt-2 md:mx-2">
                <img src={image_kppb} alt="" className="w-full h-64 object-cover" />
                <div className="description w-11/12 p-2">
                    <h2 className="location text-lg font-bold nunito-sans">Kampung Pulo Bambu</h2>
                    <p className="text-sm w-full nunito text-justify">Kampung pertama yang kami kunjungi, sangat berkesan dan sangat melelahkan tapi menyenangkan. Banyak hal yang dapat kita pelajari dan ambil hikmah-nya karena ini projek pertama kami di perkampungan.</p>
                </div>
                <div className="date px-2">
                  <p className="text-xs text-slate-400 nunito">31/07/2022</p>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="150" className="card w-full md:w-64 mx-0 mt-2 md:mx-2">
                <img src={image_ybu} alt="" className="w-full h-64 object-cover" />
                <div className="description w-11/12 p-2">
                    <h2 className="location text-lg font-bold nunito-sans">Yayasan Baitul Ummi</h2>
                    <p className="text-sm w-full nunito text-justify">Projek pertama yang sangat amat banyak kurangnya dan kaget saat disambut dengan formal oleh pihak yayasan padahal acara kami main - main. Tidak ada susunan acara, kepanitiaan, persiapan tapi acara berjalan dengan SUKSES!</p>
                </div>
                <div className="date px-2">
                  <p className="text-xs text-slate-400 nunito">15/04/2022</p>
                </div>
              </div>
            </div>
        </div>
    )
}

AOS.init();
export default MissionsCompleted;
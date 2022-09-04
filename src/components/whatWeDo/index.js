import image_wwd from "./../../assets/images/wwd-image.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css';

function WhatWeDo() {
    return( 
        <div id="whatWeDo-section" className="flex flex-col items-center bg-white rounded-3xl pt-14">
            <h1 data-aos="fade-up" data-aos-delay="50" className="text-2xl font-bold nunito-sans">What We Do</h1>
            <div className="content flex md:flex-row flex-col justify-center">
                <h2 data-aos="fade-up" data-aos-delay="100" className="text-2xl font-bold nunito-sans md:w-64 w-full p-4">Mengulurkan tangan untuk anak - anak yatim & piatu dengan <span className="text-red-600">bermain dan memberikan senyuman</span> kepada mereka</h2>
                <div className="md:w-1/2 w-full flex flex-col">
                    <img data-aos="fade-up" data-aos-delay="200" src={image_wwd} alt="kids" className="w-full h-40 object-cover md:rounded-xl rounded-none" />
                    <p data-aos="fade-up" data-aos-delay="150" className="p-4">Dengan acara yang kebanyakan dibuat untuk anak - anak, kami menyimpulkan bahwa anak - anak ini kelak akan meneruskan perjuangan kami sebagai orang yang ingin bermanfaat bagi orang lain. Kami harap mereka seperti itu, punya semangat juang untuk melakukan hal baik dimanapun dan kapanpun. Anak - anak ini akan menjadi pondasi - pondasi bangsa ini di masa depan dan tidak lupa anak - anak ini bisa menjadi kekuatan Islam di masa depan! <a className="text-red-600 underline" href="https://bit.ly/3sQK07C"> Mari Berdonasi!</a></p>
                </div>
            </div>
        </div>
    )
}

AOS.init();
export default WhatWeDo;
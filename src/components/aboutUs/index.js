import image1_team from "./../../assets/images/aboutUs/team-image1.jpeg"
import image2_team from "./../../assets/images/aboutUs/team-image2.jpeg"
import gallery1 from "./../../assets/images/aboutUs/gallery1.jpeg"
import gallery2 from "./../../assets/images/aboutUs/gallery2.jpeg"
import gallery3 from "./../../assets/images/aboutUs/gallery3.jpeg"
import gallery4 from "./../../assets/images/aboutUs/gallery4.jpeg"
import gallery5 from "./../../assets/images/aboutUs/gallery5.jpeg"
import gallery6 from "./../../assets/images/aboutUs/gallery6.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutUs(){
    return(
        <div id="about-us" className="aboutUS p-7">
            <div className="title text-center md:m-5 p-2">
                <h1 data-aos="fade-up" data-aos-delay="50" className="text-2xl font-bold nunito-sans">About Us</h1>
            </div>
            <div className="content flex md:flex-col flex-row-reverse items-center">
                <div className="photo flex flex-col md:items-center w-full">
                    <img data-aos="fade-up" data-aos-delay="100" className="md:w-8/12 w-full md:h-64 h-1/2 object-cover object-bottom m-1" src={image1_team} alt="" />
                    <img data-aos="fade-up" data-aos-delay="150" className="md:w-8/12 w-full md:h-64 h-1/2 object-cover object-center m-1" src={image2_team} alt="" />
                </div>
                <div className="flex md:flex-row flex-col md:items-center md:w-8/12 p-2 w-full">
                    <div className="md:text-right md:m-2 md:p-2 mb-1">
                        <h2 data-aos="fade-right" data-aos-delay="200" className="md:text-6xl text-3xl font-bold poppins italic text-red-600">NONGSKI</h2>
                        <p data-aos="fade-right" data-aos-delay="250" className="md:text-2xl text-xs font-bold leading-3">Never stop being kind</p>
                    </div>
                    <div className="nunito md:m-2 md:p-2">
                        <p data-aos="fade-left" data-aos-delay="300" className="text-xs w-full">Bukan komunitas apalagi organisasi, kami cuma sekumpulan teman main yang senang main bersama tapi ingin bermanfaat juga untuk orang lain. Akhirnya terbentuklah nongski ini, nongski hanyalah sebuah nama yang dibuat mendadak oleh salah satu crew, sebenarnya apapun nama nya yang penting di dalamnya. <button className="text-red-600 font-semibold underline" href="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">More photos</button></p>
                    </div>
                </div>
            </div>

            <div className="offcanvas offcanvas-bottom fixed bottom-0 top-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 left-0 right-0 border-none h-full max-h-full" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
              <div className="offcanvas-header flex items-center justify-between pt-4 px-4">
                <h5 className="offcanvas-title mb-0 leading-normal font-semibold" id="offcanvasBottomLabel">Gallery</h5>
                <button type="button" className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
            <div className="offcanvas-body flex-grow p-0 overflow-y-auto small">
                <div className="overflow-hidden text-gray-700">
                  <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
                    <div className="flex justify-center p-4">
                      <a href="https://instagram.com/nongski_crew" className="nunito text-red-600 text-lg underline">Find us in Instagram!</a>
                    </div>
                    <div className="flex flex-wrap -m-1 md:-m-2">
                      <div className="flex flex-wrap md:w-1/2 w-full">
                        <div className="w-1/2 p-1 md:p-2">
                          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                            src={gallery1} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                            src={gallery2} />
                        </div>
                        <div className="w-full p-1 md:p-2">
                          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                            src={gallery3} />
                        </div>
                      </div>
                      <div className="flex flex-wrap md:w-1/2 w-full">
                        <div className="w-full p-1 md:p-2">
                          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                            src={gallery4} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                            src={gallery5} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                            src={gallery6} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

AOS.init();
export default AboutUs;
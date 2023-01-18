import AOS from "aos";
import "aos/dist/aos.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import data_mission_completed from "../../json/data_mission_completed.json";

// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

function AboutUs() {
  const options = {
    type: "loop",
    gap: "10px",
    drag: "free",
    arrows: false,
    pagination: false,
    perPage: 1,
    autoScroll: {
      pauseOnHover: false,
      pauseOnFocus: false,
      rewind: false,
      speed: 1,
    },
  };

  const { images_about_us } = data_mission_completed;

  return (
    <div id="about-us" className="aboutUS">
      <div className="title text-center mt-5 -mb-10 p-2">
        <h1
          data-aos="fade-up"
          data-aos-delay="50"
          className="text-2xl font-bold nunito-sans"
        >
          About Us
        </h1>
      </div>
      <div className="content flex flex-col items-center md:px-36">
        <Splide
          className="splide"
          options={options}
          extensions={{ AutoScroll }}
          aria-label="My Favorite Images"
        >
          {images_about_us &&
            images_about_us.map((image, x) => (
              <SplideSlide key={x}>
                <img src={image.image_url} alt={`about us`} />
              </SplideSlide>
            ))}
        </Splide>
        <div className="flex md:flex-row flex-col md:items-center md:w-8/12 -mt-10 px-10 w-full">
          <div className="md:text-right md:m-2 md:p-2 mb-1">
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              className="md:text-6xl text-3xl font-bold poppins italic text-red-600"
            >
              NONGSKI
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="250"
              className="md:text-2xl text-xs font-bold leading-3"
            >
              Never stop being kind
            </p>
          </div>
          <div className="nunito md:m-2 md:p-2">
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-xs w-full"
            >
              Bukan komunitas apalagi organisasi, kami cuma sekumpulan teman
              main yang senang main bersama tapi ingin bermanfaat juga untuk
              orang lain. Akhirnya terbentuklah nongski ini, nongski hanyalah
              sebuah nama yang dibuat mendadak oleh salah satu crew, sebenarnya
              apapun nama nya yang penting di dalamnya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

AOS.init();
export default AboutUs;

// function Footer(props) {
//     const { srcimg } = props
//         return(
//             <div className="flex justify-center bg-white rounded-t-3xl w-full h-40">
//                 <div className="flex flex-row justify-center items-center w-5/6">
//                     <div className="flex flex-row items-center w-1/2">
//                         <div className="logo flex items-center">
//                             <img src={srcimg} className="w-20" alt="logo nongski" />
//                         </div>
//                         <h1 className="md:text-4xl text-xl font-extrabold nunito text-red-600">Never Stop<br />Being Kind</h1>
//                     </div>
//                     <div className="flex md:flex-row flex-col w-1/2 text-black">
//                         <ul className="md:m-auto">
//                             <h2 className="md:text-lg text-sm font-semibold leading-loose">Explore us</h2>
//                             <div className="md:text-sm text-xs">
//                                 <li className="text-slate-300">Friends</li>
//                                 <li className="text-slate-300">Terms & Conditions</li>
//                                 <li className="text-slate-300">Privacy policy</li>
//                             </div>
//                         </ul>
//                         <ul className="md:m-auto">
//                             <h2 className="md:text-lg text-sm font-semibold leading-loose">Getting touch</h2>
//                             <div className="md:text-sm text-xs">
//                                 <li><a href="https://instagram.com/nongski_nsbk">@nongski_nsbk</a></li>
//                                 <li><a href="mailto:nongski.nsbk@gmail.com">nongski.nsbk@gmail.com</a></li>
//                                 <li><a href="https://wa.me/6285773821645">0857-7382-1645</a></li>
//                             </div>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         );
// }

// export default Footer;

import React from "react";
import instagram_icon from "../../assets/images/icons/instagram.svg"
import message_icon from "../../assets/images/icons/message-circle.svg"
import mail_icon from "../../assets/images/icons/mail.svg"

export default function Footer(props) {
  const { srcimg } = props;
  return (
    <div className="flex w-full p-10 bg-white">
      <div className="left-col w-1/2 flex flex-col items-center">
        <img src={srcimg} className="w-32" alt="logo nongski" />
        <div className="ml-4 -mt-10">
          <p className="font-semibold">
            <span className="text-red-600">Nongski</span>{" "}
            <span className="text-slate-100">|</span> Never Stop Being Kind
          </p>
          <p className="text-slate-300">Developed by Waidz</p>
        </div>
      </div>
      <div className="right-col flex flex-col justify-center items-center w-1/2">
        <h2 className="text-lg font-bold text-slate-300 mb-2">Social</h2>
        <div className="grid grid-flow-col gap-1">
          <a href="https://instagram.com/nongski_nsbk">
            <img src={instagram_icon} alt="icon"/>
          </a>
          <a href="https://wa.me/6285773821645">
            <img src={message_icon} alt="icon"/>
          </a>
          <a href="mailto:nongski.nsbk@gmail.com">
            <img src={mail_icon} alt="icon"/>
          </a>
        </div>
      </div>
    </div>
  );
}

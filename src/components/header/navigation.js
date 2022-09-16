import {useState} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navigation() {
    //setting mobile nav
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    //change color nav desktop when scrolling
    const [color, setColor] = useState(false);
    const changeColorNav = () => {
        if(window.scrollY >= 90){
            setColor(true)
        } else{
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColorNav);
    
    return(
        <div className={
            color?
            'head navbar-bg backdrop-blur-xl nunito flex flex-row justify-between items-center fixed w-full z-10 duration-75' :
            'head nunito flex flex-row justify-between items-center fixed w-full z-10 duration-75'
        }>
            <div className="logo ml-2 p-4 md:ml-10">
                <h1 className="text-xl font-bold text-red-600">Nongski</h1>
            </div>
            <div className={isNavExpanded ? "navigation absolute expanded hidden md:flex right-0 ease-in-out duration-100" : "navigation absolute right-0 md:flex ease-in-out duration-100"}>
                <ul className="items-navigation flex md:flex-row flex-col text-center md:w-96 w-full md:text-black text-white m-5">
                    <li className="md:m-auto m-5 md:hover:text-red-600 hover:text-white"><a href="#process-section">Process</a></li>
                    <li className="md:m-auto m-5 md:hover:text-red-600"><a href="#completed-section">Completed</a></li>
                    <li className="md:m-auto m-5 md:hover:text-red-600"><a href="#about-us">About us</a></li>
                </ul>
                <div className="donasi-button md:flex md:justify-center md:items-center md:bg-red-600 bg-white md:text-white text-red-600 p-2 md:mr-10 md:h-20 md:rounded-b-3xl rounded-sm"><a href="https://bit.ly/3sQK07C">Donasi</a></div>
            </div>
            <div className="menu md:hidden block mr-2 p-4" onClick={() => {
                setIsNavExpanded(!isNavExpanded);
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>
        </div>
    )
}
AOS.init();
export default Navigation;
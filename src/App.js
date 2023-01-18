import Navigation from "./components/header/navigation"
import Hero from "./components/header/hero"
import WhatWeDo from "./components/whatWeDo"
import UpcomingMission from "./components/upcomingMission"
import MissionsCompleted from "./components/MissionsCompleted"
import AboutUs from "./components/aboutUs"
import Footer from "./components/Footer"
import logo from "./assets/images/logo-nongski.png"
import './assets/css/custom.css'
import './assets/css/fonts.css'

function App() {
  return (
    <html className="scroll-smooth">
    <div className="App m-0 p-0 bg-slate-50 w-full">
      <header className="h-screen">
        <Navigation />
        <Hero />
      </header>
      <section>
        <WhatWeDo />
        <UpcomingMission/>
        <MissionsCompleted />
        <AboutUs />
      </section>
      <footer>
        <Footer srcimg={logo} />
      </footer>
    </div>
    </html>
  );
}


export default App;
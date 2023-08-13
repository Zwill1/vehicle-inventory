import Hero from '../components/staticComponents/Hero.jsx';
import MainSectionOne from '../components/staticComponents/HomeSectionOne.jsx';
import HomeSectionBanner from '../components/staticComponents/HomeSectionBanner.jsx';
import HomeSectionCTA from '../components/staticComponents/HomeSectionCTA.jsx';
import Footer from '../components/staticComponents/Footer.jsx';

import MeetTheTeam from '../components/staticComponents/MeetTheTeam.jsx';


const Home = () => {
  return (
    <>
        <Hero />
        <MainSectionOne />
        <HomeSectionBanner />
        <MeetTheTeam />
        <HomeSectionCTA />
        <Footer />
    </>
  )
}

export default Home
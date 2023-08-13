import {useState} from 'react'

import Hero from '../components/staticComponents/Hero.jsx';
import NewSectionCTA from '../components/staticComponents/HomeSectionCTA.jsx';
import Footer from '../components/staticComponents/Footer.jsx'
import CarTable from '../components/subComponents/CarTableData.jsx';
import SearchBar from '../components/subComponents/SearchBar.jsx';

const Car = () => {

  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  return (
    <>
      <Hero />
      <section className='container mx-auto pt-7 grid grid-cols-1'>
          <h1 className='text-center'>Search for Car brands</h1>
      </section>
      <SearchBar AddHandleSearch={handleSearch} />
      <CarTable AddSearch={search}  />
      <NewSectionCTA />
      <Footer />
    </>
  )
}

export default Car
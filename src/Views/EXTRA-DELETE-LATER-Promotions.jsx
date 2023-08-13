import {useState} from 'react'
import CarTable from '../components/subComponents/CarTableData.jsx';
import SearchBar from '../components/subComponents/SearchBar.jsx';

const Promotions = () => {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  return (
    <>
      <section className='container mx-auto pt-7 grid grid-cols-1'>
          <h1 className='text-center'>Search for Car brands</h1>
      </section>
      <SearchBar AddHandleSearch={handleSearch} />
      <CarTable AddSearch={search}  />
    </>
  )
}

export default Promotions
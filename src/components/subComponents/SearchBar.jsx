function SearchBar({AddHandleSearch}) {
  return (
    <>
        <section className='container mx-auto pt-2 grid grid-cols-1 lg:grid-cols-1'>
            <input onChange={AddHandleSearch} placeholder='Filter Cars by Brand' className='text-black py-1 bg-gray-100 p-3 border-4 border-blue-900'></input>
        </section>
    </>
  )
}

export default SearchBar
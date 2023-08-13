import { Link } from 'react-router-dom';

const TopHeader = () => {
  return (
    <>
      <section className='top-header h-full sm:h-[30px] drop-shadow-lg flex'>
        <div className='container flex flex-row flex-wrap mx-auto justify-between md:w-full w-10/12'>
          <div className='flex flex-col'>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className='flex flex-col'>
            <p>
              <Link to='/contact' className='top-header-link'>Get your quote here!</Link>
            </p>
          </div>
        </div>
    </section>
    </>
  )
}

export default TopHeader
import CarCard from '../subComponents/CarCard'

const HomeSectionBanner = () => {
  return (
    <>
    <section className='bannerBg'>
        <div className='container mx-auto w-10/12 md:w-8/12 py-10'>
            <h2 className='text-3xl font-extrabold uppercase bannerHeader text-center'>We’re More than Just a Dealership!</h2>
            <p className=' text-center'>We believe in building long-term relationships with our customers, and that includes providing exceptional after-sales service. We understand that your vehicle is an important part of your daily life, and we strive to provide the best care and attention to keep it running at its best. Our team of experts is dedicated to ensuring that your vehicle is well-maintained and performing at its peak. We also provide regular check-ups to identify any potential issues and address them before they become major problems. At our dealership, you can trust us to provide quality service and care for your vehicle, ensuring its longevity and your satisfaction.</p>
        </div>
        <div className='w-12/12 container py-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
          <CarCard />
        </div>
    </section>
    </>
  )
}

export default HomeSectionBanner
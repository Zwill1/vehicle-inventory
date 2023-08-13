import Button from '../subComponents/Button.jsx';

import DealershipImage from '../../assets/images/home-instances-block-dealership.jpg';

const HomeSectionOne = () => {
  return (
    <>
        <section className='container mx-auto py-14 w-10/12'>
            <div className='xl:flex items-center'>
                <div className='flex-1 order-1 md:order-last'>
                    <img src={DealershipImage} alt="" />
                </div>
                <div className='flex-1 order-2 md:order-first'>
                    <h2 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold'>Our team patiently awaits you at Car Dealership.</h2>
                    <p className='mt-5'>As a car dealership company, we understand that purchasing a vehicle is a significant investment for our clients. That is why we strive to offer the best customer experience and quality cars to ensure customer satisfaction. We provide a wide selection of vehicles to suit various budgets and preferences, including brand new and used vehicles. Our team of sales representatives is highly knowledgeable and committed to providing personalized solutions to meet the unique needs of each customer. We aim to make the car buying process as stress-free and transparent as possible by providing accurate information about our cars, including vehicle history reports and maintenance records. By choosing to buy from us, you can be assured that you will receive a high-quality vehicle that meets your expectations and budget.</p>
                    <p className='mt-5'>Our car dealership company prides itself on providing the best financing options for our clients. We understand that not everyone has the cash upfront to purchase a vehicle, which is why we have partnered with reputable financial institutions to provide flexible financing options. Our finance specialists work with clients to find the best rates and terms that suit their budgets and financial goals. We aim to make financing easy and hassle-free, ensuring our clients drive off with their dream car without breaking the bank.</p>
                    <p className='mt-5'>At our car dealership company, we believe in building long-term relationships with our clients. We offer comprehensive after-sales services to ensure that our clients get the best out of their vehicles. Our service department is staffed with highly trained technicians who provide quality maintenance and repairs using state-of-the-art equipment. We also provide regular vehicle check-ups, oil changes, and other maintenance services to keep your vehicle running smoothly and efficiently. Our clients can trust us to provide excellent service even after they have made their purchase, ensuring their satisfaction and loyalty.</p>
                    <div className='grid grid-cols-2 gap-2 mt-10'>
                        <div>
                            <Button link='/car' style='button-link' cName='w-full font-bold rounded-none h-full'>New & Used Cars</Button>
                        </div>
                        <div>
                            <Button link='/contact' style='button-link' cName='w-full font-bold rounded-none h-full'>Contact Us</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default HomeSectionOne
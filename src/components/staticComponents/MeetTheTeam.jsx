import John from '../../assets/images/john-sales-manager.jpg';
import Sarah from '../../assets/images/sarah-sales-consultant.jpg';
import Mike from '../../assets/images/mike-finance-manager.jpg';
import Lisa from '../../assets/images/lisa-service-advisor.jpg';
import Tom from '../../assets/images/tom-parts-manager.jpg';
import Maria from '../../assets/images/maria-detailer.jpg';

const MeetTheTeam = () => {
  return (
    <>
        <section className='container mx-auto pt-14 pb-5 w-10/12' id='about'>
            <h1 className='text-center font-bold'>Meet The Team</h1>
        </section>
        <section className='container mx-auto pb-14 w-10/12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
            <div className='p-2 md:p-5 lg:p-10 grid row-auto justify-center items-center'>
                <img className='self-center justify-self-center' src={John} />
                <h4 className='self-center justify-self-center font-bold'>John</h4>
                <p className='self-center justify-self-center font-semibold italic'>Sales Manager</p>
                <p>John is the Sales Manager at the dealership, with over 15 years of experience in the automotive industry. He has a deep understanding of the sales process and is passionate about helping customers find the right car to fit their needs. John is known for his excellent communication skills and his ability to motivate his team to achieve their goals.</p>
            </div>
            <div className='p-2 md:p-5 lg:p-10 grid row-auto justify-center items-center'>
                <img className='self-center justify-self-center' src={Sarah} />
                <h4 className='self-center justify-self-center font-bold'>Sarah</h4>
                <p className='self-center justify-self-center font-semibold italic'>Sales Consultant</p>
                <p>Sarah is a Sales Consultant at the dealership, with a background in customer service and sales. She has a friendly and approachable demeanor, and is always willing to go the extra mile to help her customers find the perfect car. Sarah is knowledgeable about the different models and features, and is committed to providing a positive car-buying experience.</p>
            </div>
            <div className='p-2 md:p-5 lg:p-10 grid row-auto justify-center items-center'>
                <img className='self-center justify-self-center' src={Mike} />
                <h4 className='self-center justify-self-center font-bold'>Mike</h4>
                <p className='self-center justify-self-center font-semibold italic'>Finance Manager</p>
                <p>Mike is the Finance Manager at the dealership, with years of experience in the financial industry. He is skilled at helping customers secure financing for their vehicle purchases, and is dedicated to finding the best possible rates and terms. Mike is known for his attention to detail and his ability to explain complex financial concepts in simple terms.</p>
            </div>
            <div className='p-2 md:p-5 lg:p-10 grid row-auto justify-center items-center'>
                <img className='self-center justify-self-center' src={Lisa} />
                <h4 className='self-center justify-self-center font-bold'>Lisa</h4>
                <p className='self-center justify-self-center font-semibold italic'>Service Advisor</p>
                <p>Lisa is a Service Advisor at the dealership, with a strong background in automotive repair and maintenance. She is responsible for assisting customers with scheduling service appointments, and for ensuring that their vehicles are properly serviced and maintained. Lisa is known for her excellent customer service skills and her ability to build trust with her clients.</p>
            </div>
            <div className='p-2 md:p-5 lg:p-10 grid row-auto justify-center items-center'>
                <img className='self-center justify-self-center' src={Tom} />
                <h4 className='self-center justify-self-center font-bold'>Tom</h4>
                <p className='self-center justify-self-center font-semibold italic'>Parts Manager</p>
                <p>Tom is the Parts Manager at the dealership, with years of experience in the automotive parts industry. He is responsible for ensuring that the dealership has an adequate supply of parts and accessories, and for ordering new parts as needed. Tom is known for his extensive knowledge of automotive parts and his commitment to providing quality parts at competitive prices.</p>
            </div>
            <div className='p-2 md:p-5 lg:p-10 grid row-auto justify-center items-center'>
                <img className='self-center justify-self-center' src={Maria} />
                <h4 className='self-center justify-self-center font-bold'>Maria</h4>
                <p className='self-center justify-self-center font-semibold italic'>Detailer</p>
                <p>Maria is a Detailer at the dealership, with a passion for making cars look their best. She is responsible for washing, waxing, and detailing the vehicles on the lot, and for ensuring that they are showroom ready. Maria is known for her attention to detail and her ability to bring out the best in each vehicle she works on.</p>
            </div>
        </section>
    </>
  )
}

export default MeetTheTeam
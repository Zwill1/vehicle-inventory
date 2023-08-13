import Button from '../subComponents/Button';

const HomeSectionCTA = () => {
return (
<>
    <section className='cta-bannerBg'>
        <div className='mx-auto grid grid-cols-1 lg:grid-cols-3'>
            <div className='cta-footer text-center p-5 py-10 special-offer-bg'>
                <h2 className='text-3xl font-extrabold uppercase'>Promotional Offers</h2>
                <p>Visit our dealership today and take advantage of our special offers, including low financing rates and cash-back incentives. Dont miss out on this opportunity to drive home in a brand new or pre-owned vehicle at an unbeatable price!</p>
                <Button link='#' cName='font-bold rounded-none' style='button-link' >View Promotional Offers</Button>
            </div>
            <div className='cta-footer text-center p-5 py-10 financing-options-bg'>
                <h2 className='text-3xl font-extrabold uppercase'>Financing Options</h2>
                <p>At our dealership, we understand that financing is a crucial part of the car buying process. That is why we offer a variety of financing options, including leasing and loans, to suit every budget and need.</p>
                <Button link='#' cName='font-bold rounded-none' style='button-link' >Financing Available</Button>
            </div>
            <div className='cta-footer text-center p-5 py-10 meet-team-bg'>
                <h2 className='text-3xl font-extrabold uppercase'>Meet Our Team</h2>
                <p>Looking to meet our team of experts? View our staff listings, including our sales representatives, finance specialists, and service technicians. Get to know the people who are committed to providing you with the best customer experience.</p>
                <Button link='#' cName='font-bold rounded-none' style='button-link' >Meet Our Team</Button>
            </div>
        </div>
    </section>
</>
)
}

export default HomeSectionCTA
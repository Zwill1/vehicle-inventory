import { Link } from 'react-router-dom';
import Button from '../subComponents/Button';

const Footer = () => {
  return (
    <>
        <section className='bottom-footer'>
            <div className='container mx-auto flex flex-row flex-wrap w-10/12 py-10'>
                <div className='footer-padding basis-full lg:basis-1/4'>
                    <h2 className='font-bold text-xl'>Contact Us</h2>
                    <p>
                        Car Dealership <br />
                        11700 Car Fraser Dr SW, <br />
                        Calgary, Alberta, T4R 9E2 
                    </p>
                    <p>
                        <Button link='/contact' style='button-link' cName='rounded-none'>Contact Us</Button>
                    </p>
                </div>
                <div className='footer-padding basis-full lg:basis-1/4'>
                    <h2 className='font-bold text-xl'>Business Hours</h2>
                    <p>Monday - 8:30AM  to  6:00PM <br/>
                    Tuesday - 8:30AM  to  6:00PM <br/>
                    Wednesday -	8:30AM  to  6:00PM <br/>
                    Thursday - 8:30AM  to  6:00PM <br/>
                    Friday - 8:30AM  to  6:00PM <br/>
                    Saturday - 9:00AM  to  6:00PM <br/>
                    Sunday - Closed</p>
                </div>
                <div className='footer-padding basis-full lg:basis-1/4'>
                    <h2 className='font-bold text-xl'>Promotions</h2>
                    <ul>
                        <li>Special Offers</li>
                        <li>Service Department</li>
                        <li>About Us</li>
                        <li>Staff Listing</li>
                        <li>News</li>
                    </ul>
                </div>
                <div className='footer-padding basis-full lg:basis-1/4'>
                    <h2 className='font-bold text-xl'>Useful Links</h2>
                    <ul>
                        <li>
                            <Link to='/' className='footer-link'>Home</Link>
                        </li>
                        <li>
                            <a href="/#about" className='footer-link'>About</a>
                        </li>
                        <li>
                            <Link to='/car' className='footer-link'>New & Used Cars</Link>
                        </li>
                        {/* <li>
                            <Link to='/contact' className='footer-link'>Contact Us</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer
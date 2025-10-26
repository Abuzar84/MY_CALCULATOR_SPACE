import {Link} from 'react-router-dom'

function Footer(){
    const CurrentYear = new Date().getFullYear()

    return(
        <div className='w-screen bg-black text-white'>
            <div className='flex justify-center pt-2 gap-5 flex-wrap'>
                <div className='text-center'>
                   <h2>My Calculator Space</h2>
                   <p>Your reliable tool for everyday calculations.</p>
                </div>
                <div className='text-center'>
                    <nav className=''>
                        <h2>Quick Links</h2>
                        <div className='flex gap-2'> 
                            <Link to='/'>Home</Link>
                            <Link to='/about'>About Us</Link>
                            <Link to='/privacy-policy'>Privacy Policy</Link>
                        </div> 
                    </nav>
                </div>
                <div className='text-center'>
                    <h2>Follow Us</h2>
                    <div className='flex gap-2'>
                        <a href="https://www.facebook.com/profile.php?id=61577955231229">Facebook</a>
                        <a href="https://x.com/mycalculator8">Twitter</a>
                        <a href="https://www.instagram.com/mycalculatorspace.in/">Instagram</a>
                    </div>
                </div>
                <div className='text-center'>
                    <h2> Contact Us</h2>
                     <a href="mailto:customer@mycalculatorspace.in" className=" text-blue-500 hover:text-blue-700">customer@mycalculatorspace.in</a>.
                </div>
            </div>
            <div className='text-center border-t'>
                <p>&copy; {CurrentYear} My Calculator Space. All rights reserved.</p>
            </div>
        </div>
    )
}
export default Footer
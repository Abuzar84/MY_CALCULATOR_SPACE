import {Link} from 'react-router-dom'

function Footer(){
    const CurrentYear = new Date().getFullYear()

    return(
        <div className='w-screen bg-black text-white'>
            <div className='flex justify-center pt-2 gap-5'>
                <div className='text-center'>
                   <h2>My Calculator Space</h2>
                   <p>Your reliable tool for everyday calculations.</p>
                </div>
                <div className='text-center'>
                    <nav>
                        <h2>Quick Links</h2>
                        <Link to='/'>Home</Link>
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
            </div>
            <div className='text-center border-t'>
                <p>&copy; {CurrentYear} My Calculator Space. All rights reserved.</p>
            </div>
        </div>
    )
}
export default Footer
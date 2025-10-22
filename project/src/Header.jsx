import {Link} from 'react-router-dom'

function Header(){
    return(
        <>
        <div className='w-screen bg-red-500 text-center text-white  font-bold'>
            <h1 className='text-4xl'>My Calculator Space</h1>
            <nav className='bg-yellow-300'>
                <span className='bg-gray-400 pl-1 pr-1 border-black border-2'><Link to='/'>Home</Link></span> 
                <span className='bg-gray-400 pl-1 pr-1 border-black border-2'><Link to='/Calculator'>Calculator</Link></span>  
            </nav>
        </div>
        </>
    )
}
export default Header
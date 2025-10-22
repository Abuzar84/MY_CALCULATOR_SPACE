import { Link } from "react-router-dom"

function Home(){
    return(
        <div>
            <div className="flex justify-center pt-5">
              <span className="w-30">
                <Link to='/Calculator'>
                    <img src="./src/assets/calculator.webp" alt="Calculator Logo" />
                    <p>Basic Calculator</p>
                </Link>
              </span>  
            </div>
            <div className="p-10">
                <p>Welcome to My Calculator Space, your go-to destination for free online calculators. Whether you're a student, a professional, or just someone who needs to crunch some numbers, we've got you covered. Our calculators are designed to be user-friendly and efficient, providing you with quick and accurate results. From basic arithmetic to complex mathematical operations, you can find the right tool for your needs. Explore our range of calculators and simplify your calculations today!</p>
            </div>
        </div>
    )
}
export default Home
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout(){
    return(
        <div className="flex flex-col h-screen">
        <header>
            <Header/>
        </header>
        <main className="flex-1">
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </div>
    )
}
export default Layout
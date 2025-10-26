import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home"
import Calculator from './Calculator';
import About from './about.jsx'
import Layout from './Layout';

function App() {
  return(
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/Calculator' element={<Calculator/>} />
          <Route path='/about' element={<About/>} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App

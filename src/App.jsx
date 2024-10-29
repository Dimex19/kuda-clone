import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Personal from './Pages/Personal'
import Business from './Pages/Business'
import Company from './Pages/Company'
import Help from './Pages/Help'
const App = ()=> {
  return (
    <>
      <BrowserRouter>
        <Routes>
        {/* <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/> */}
          <Route path='/' element={<Personal/>}/>
          <Route path='/business' element={<Business />} />
          <Route path='/company' element={<Company />} />
          <Route path='/help' element={<Help />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}
export default App
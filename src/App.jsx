import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import SectionOne from './components/SectionOne'
import SectionThree from './components/SectionThree'
import SectionTwo from './components/SectionTwo'
const App = ()=> {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
      <Header />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </>
  )
}
export default App
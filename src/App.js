
import './App.css';
import Home from './Components/Home'
import Header from './Components/Header'
import About from './Components/About'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
 
function App() {
  return (
     <BrowserRouter>
     
    <Header/>
    <Routes>

      <Route index  path='/' element={<Home/>}/>
      <Route  path='about' element={<About/>} />
      <Route path='projects' element={<Projects/>}/>
      <Route path='contact' element={<Contact/>}/>
      

    </Routes>
    <Footer/>
     </BrowserRouter>

   
      
  );
}

export default App;

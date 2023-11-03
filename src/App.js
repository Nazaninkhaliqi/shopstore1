import { BrowserRouter , Routes, Route} from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar';
import Create from './pages/Create/Create'
import Home from './pages/Home/Home'
import Search from './pages/Search/Search'
import Shop from './pages/Shop/Shop'
import Categories from './pages/Categories/Categories'
import SpecialOffer from './pages/SpecialOffer/SpecialOffer'
import About from './pages/About/About'
import Searchbar from './components/Searchbar'
import ThemeSelector from './components/ThemeSelector';
import { useTheme } from './components/hook/useTheme';

function App() {
  const {mode} = useTheme()
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
      <Navbar/>
      <ThemeSelector/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/shops/:id' element={<Shop/>}/>
            <Route path='/Categories' element={<Categories/>}/>
            <Route path='/SpecialOffer' element={<SpecialOffer/>}/>
            <Route path='/About' element={<About/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

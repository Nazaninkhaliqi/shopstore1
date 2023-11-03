import { Link } from 'react-router-dom'
import './Navbar.css'
import Searchbar from './Searchbar'
import { useTheme } from './hook/useTheme'

export default function Navbar() {
  const {color ,changeColor} =useTheme()
  return (
    <div className='navbar' style={ {background: color} }>
        <nav onClick={()=>changeColor('crimson')}>
        <Link to='/' className='brand'><h1>shopStore</h1></Link>
        <Link to='/Categories' className='Categories'><h1>Categories</h1></Link>
        <Link to='/SpecialOffer' className='SpecialOffer'><h1>Special offer</h1></Link>
        <Link to='/About' className='About'><h1>About us</h1></Link>
        <Searchbar/>
        <Link to='/create'> Login</Link>
        </nav>
    </div>
  )
}

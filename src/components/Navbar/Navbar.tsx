import './navbar.scss';
import { Menu } from './menu';
import { Button } from '..';
import { Link, NavLink, useNavigate } from 'react-router-dom';
interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  console.log(props);
  const navigate= useNavigate();
  return (
    <div className='container_navbar'>
      <Link to={'home'} className='left'>
        <img src='/assets/logoCisco.png' width={30} height={30} alt='' />
        <p>Cisco</p>
      </Link>
      <div className='center'>{<Menu />}</div>
      <div className='right'>
        <NavLink to={'register'}>Sign Up</NavLink>
        <Button text='Login' classList={['myBtn','test','green']}  handlerOnClick={() => navigate('login')} />
      </div>
    </div>
  );
}
export default Navbar;

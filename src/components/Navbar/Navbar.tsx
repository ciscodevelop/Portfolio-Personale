import './navbar.scss';
import { Menu } from './menu';
interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  console.log(props);
  return (
    <div className='container_navbar'>
      <div className='left'><img src="/assets/logoCisco.png" width={30} height={30} alt="" /><p>Cisco</p></div>
      <div className='center'>{<Menu/>}</div>
      <div className='right'>right</div>
    </div>
  );
}
export default Navbar;

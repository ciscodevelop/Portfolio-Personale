import './navbar.scss';
import { Menu } from './menu';
import { Button } from '..';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  console.log(props);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className='container_navbar'>
      <Link to={'home'} className='left'>
        <img src='/assets/logoCisco.png' width={30} height={30} alt='' />
        <p>Cisco</p>
      </Link>
      <div className='center'>{<Menu />}</div>
      <div className='right'>
        <select name='lng' id='lng_select' onChange={(e) => changeLanguage(e.currentTarget.value)}>
          <option value='en'>🏴󠁧󠁢󠁥󠁮󠁧󠁿 - EN</option>
          <option value='es'>🇪🇸 - ES</option>
          <option value='it'>🇮🇹 - IT</option>
        </select>
        <NavLink to={'register'}>{t('navbar.sign')}</NavLink>
        <Button text={t('navbar.login')} classList={['green']} handlerOnClick={() => navigate('login')} />
      </div>
    </nav>
  );
}
export default Navbar;

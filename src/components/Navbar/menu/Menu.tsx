import { NavLink } from 'react-router-dom';
import './Menu.scss';
import { useTranslation } from 'react-i18next';
interface MenuProps {}
interface MenuitemsProps {
  id: number;
  name: string;
  displayName: string;
  path: string;
}

export function Menu(props: MenuProps) {
  const { t } = useTranslation();
  const transMenu = t('navbar.menu').split(',');
  const [Home, Project, About, Contact] = transMenu;
  console.log(props);
  const menuItems: MenuitemsProps[] = [
    { id: 1, name: 'home', displayName: Home, path: 'home' },
    { id: 2, name: 'project', displayName: Project, path: 'project' },
    { id: 3, name: 'about', displayName: About, path: '/about' },
    { id: 4, name: 'contact', displayName: Contact, path: 'contact' },
  ];
  return (
    <div className='container_menu'>
      <ul>
        {menuItems.map((item: MenuitemsProps) => (
          <li key={item.id}>
            <NavLink to={item.path}>{item.displayName}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Menu;

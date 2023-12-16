import { Outlet } from 'react-router-dom';
import './app.scss';
import { Footer, Navbar } from './components';


export function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
}

export default App;

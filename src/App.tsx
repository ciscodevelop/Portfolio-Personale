import { Outlet } from 'react-router-dom';
import './app.scss';
import { Footer, Navbar } from './components';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';


export function App() {
  return (
    <>
    <I18nextProvider i18n={i18n}>
    <Navbar />
    <main>
      <Outlet />
    </main>
      <Footer/>
    </I18nextProvider>
    </>
  );
}

export default App;

import { Typewriter } from 'react-simple-typewriter';
import './Home.scss';
import { Button } from '../../components';
interface HomeProps {}
import { useTranslation } from 'react-i18next';
import CustomizedTimeline from '../../components/Timeline/Timeline';

export function Home(props: HomeProps) {
  const { t } = useTranslation();

  console.log(props);
  const words = t('home.typeWord').split(',');
  return (
    <section className='container_home'>
    <div className='wrapper__home'>
      <div className='left'>
        <h3>{t('home.welcome')}</h3>
        <h1>
          Francesco Papa
          <span>
            <Typewriter loop={0} typeSpeed={150} deleteSpeed={90} delaySpeed={2500} cursor words={words} />
          </span>
        </h1>
        <p>{t('home.content')}</p>
        <Button text={t('home.btnContent')} style={{ width: '200px', backgroundColor: '#CBFE33', color: '#171717' }} />
      </div>
      <div className='right'>
        <div className='bg_photo'>
          <img src='/assets/myAvatarjpg.png' />
        </div>
      </div>
    </div>
      {/* <div style={{height:'1000px',background:'red'}}></div> */}
      {/* <div className="time_line">
        <CustomizedTimeline/>
      </div> */}
    </section>
  );
}
export default Home;

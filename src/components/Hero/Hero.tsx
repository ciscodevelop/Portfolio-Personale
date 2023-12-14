import './Hero.scss';
interface HeroProps {}

function Hero(props: HeroProps) {
    console.log(props)
    return <div className="Hero">Hero</div>
}
export default Hero
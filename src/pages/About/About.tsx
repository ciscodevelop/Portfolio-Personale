import './About.scss';
interface AboutProps {}

function About(props: AboutProps) {
    console.log(props)
    return <div className="About">About</div>
}
export default About
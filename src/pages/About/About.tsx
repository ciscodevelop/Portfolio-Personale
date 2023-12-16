import './About.scss';
interface AboutProps {}

export function About(props: AboutProps) {
    console.log(props)
    return <div className="container">About</div>
}
export default About
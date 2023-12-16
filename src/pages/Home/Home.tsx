import './Home.scss';
interface HomeProps {}

export function Home(props: HomeProps) {
    console.log(props)
    return <div className="Home">Home</div>
}
export default Home
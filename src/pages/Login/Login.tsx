import './Login.scss';
interface LoginProps {}

export function Login(props: LoginProps) {
    console.log(props)
    return <div className="container_Login">Login</div>
}
export default Login
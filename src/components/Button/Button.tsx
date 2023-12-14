import './Button.scss';
interface ButtonProps {}

function Button(props: ButtonProps) {
    console.log(props)
    return <div className="Button">Button</div>
}
export default Button
import './Button.scss';
type bgColorScss='$primary-color-white'|'$primary-color-dark'|'$primary-color-dark-green';
interface ButtonProps {
    text:string;
    classList?:string[];
    handlerOnClick?:()=>void;
    style?:React.CSSProperties;
    bgColor?:bgColorScss
}

export function Button({handlerOnClick,classList,style,text}: ButtonProps) {
  console.log(handlerOnClick,classList,style);
//   const {handlerOnClick,classList,style}=props
const customStyle=style||{}
const customClassList=classList?.join(" ")||''
  return (
    <div className='container_button'>
      <button onClick={handlerOnClick} className={`btn ${customClassList}`} style={customStyle}>{text}</button>
    </div>
  );
}
export default Button;

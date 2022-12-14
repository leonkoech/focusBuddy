import style from './Button.module.scss'

type Props={
    text: string,
    type: string,
}

const Button =({text}:Props)=>{
  return (
    <div  className={style.size+" "+style.type}>
        {text}
    </div>
  );
}
export default Button;
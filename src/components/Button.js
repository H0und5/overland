
const Button = ( { cta, onClick, buttonType } ) => {

  return (
    <button onClick={onClick} type={buttonType}>{cta}</button>
  )
}

export default Button;
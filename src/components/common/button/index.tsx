

type IButton = {
    type:"submit",
    label:string,
    disabled?:boolean
    

}

export const Button = ({type,label}:IButton) => {

  return (
    <button type={type}>{label}</button>
  )
}

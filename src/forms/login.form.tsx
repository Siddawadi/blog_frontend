import { useForm } from "react-hook-form"
import { Input } from "../components/common/input/input"
import { Button } from "../components/common/button"
import { useMutation } from "@tanstack/react-query"
export const Loginform = () => {
    const {register}=useForm({
        defaultValues:{
            email:"",
            password:""
        }
    })
    const {}=useMutation({
        
    })

    
  return (
    <div className="flex-col flex justify-center items-center ">
        <form action="" className="gap-4 flex-col flex py-2 min-w-60  ">

            <p className="font-bold text-2xl text-white w-full
             flex items-center justify-center">Login Form</p>
    <Input name={"email"} placeholder={"enter your email"} id={"email"} type={"text"}
    label={" Email"}
    register={register}
    />
    <Input name={"password"} placeholder={"enter your password"} id={"password"}
     type={"password"}
    label={" Password"}
    register={register}
    />
    <div  className="min-w-full py-2 bg-black/55 flex items-center justify-center rounded-2xl
    h-10
    ">
        <Button  type={"submit"} label={"Login"}   disabled={false}    />
    </div>

</form>

    </div>
  )
}

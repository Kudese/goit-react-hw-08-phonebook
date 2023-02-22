
import { loginAccount } from "components/redux/authentication/authentication.thunk"
import { useState } from "react"
import { useDispatch } from "react-redux"

export default function Login() {
    const dispatch = useDispatch()
    const [email, setEmail]= useState('')
    const [password, setPassWord]= useState("")
    const handleEmail = (event)=>{
       setEmail(event.target.value)
    }
    const handlePassWorld = (event)=>{
        setPassWord(event.target.value)
    }
  const handleSubmit=(event)=>{
    event.preventDefault();
    dispatch(loginAccount({email,password}))
    setEmail('')
    setPassWord('')
  }
    return(<div> <h2>Login</h2>
    <form onSubmit={handleSubmit} action="">
        <label> Email<input onChange={handleEmail} type={"email"} name='email' ></input></label>
        <label> PassWord<input onChange={handlePassWorld} type={"password"} name="passworld" ></input></label>
        <button type="submit"> Login</button>
    </form>
    </div>)
}





// {
//     "name": "Adrian Cross",
//     "email": "across@mail.com",
//     "password": "examplepwd12345"
//   }
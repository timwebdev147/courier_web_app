'use client'
import styles from "@/styles/admin/login.module.scss";
import axios from "axios";
import { useState } from "react";
import Spinner from "../../../../components/Spinner";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const Login:React.FC = () => {
    const router = useRouter()
    const [userName, setUsername] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [error, setError] = useState<string>()
    const [clicked, setClicked] =useState<boolean>(false)

    function submit(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault()
        if(!userName && !password){
            return setError("username and password are required"); 
        }
        else if(!userName){
            return setError("username field is empty"); 
        }
        else if(!password){
            return setError("password field is empty"); 
        }
        else{
            setError("")
            setClicked(true)
        }
        axios.post("https://courier-api.onrender.com/api/login", {
            userName,
            password
        })
        .then(res => {
            console.log(res.data);
            setClicked(false)
            toast.success("login successful")
            router.push('/admin354/dashboard/deliveries')
            localStorage.setItem('token', res.data.token);
        })
        .catch(err => {
            setClicked(false)
            setError(err.response.data.message)
            console.log(err)
        })

    }
    return (

        <main className={styles.container}>
            <ToastContainer/>
            <form action="">
                <div>
                    <label htmlFor="">Username</label>
                    <input type="text" onChange={e => {setUsername(e.target.value);e.target.value? setError(""): null}} placeholder="Enter username"/>
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" onChange={e => {setPassword(e.target.value);e.target.value? setError(""): null}} placeholder="Enter password" />
                </div>
                <button onClick={e => submit(e)}>{clicked? <Spinner size={22} color={'red'} thickness={4}/>:"Login"}</button>
                <small style={{color: "red"}}>{error}</small>
            </form>
        </main>
    )
}



export default Login;
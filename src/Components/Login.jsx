import {useEffect,useRef} from 'react';

const Login = ()=> {


const inputRef =useRef(null)

useEffect(()=> {
    // focus the username input
// console.log(inputRef.current);
inputRef.current.focus(); 
} , [])
    return (
        <>
            <label htmlFor="">Username</label>
            <input ref={inputRef} type="text" />
            <label htmlFor="">Password</label>
            <input type="password"/>
            <br/>
            <button>Login</button>
        </>
    )
}


export default Login ;
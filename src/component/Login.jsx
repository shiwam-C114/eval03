import React, { useState } from 'react'

function Login() {

    const [isAuth, setIsAuth] = useState(false)

    function login() {
        setIsAuth(true)
        console.log(isAuth);
        window.location.href = "/";
    }
  return (
      <>
        <div>Login</div>
        <button onClick={login}>login</button>
      </>

  )
}

export default Login
import React, { useState } from 'react'
import { ContextProvider } from '../context'



function Register() {


    

    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [username, setUsername] = useState("")
    // const [mobile, setMobile] = useState("")
    // const [description, setDescription] = useState("")

    const initState = {
        name: "",
        email: "",
        password: "",
        username: "",
        mobile: "",
        description: ""
      }

      const [state, setState] = useState(initState)

      const handleChange = e => {
        const {name, value} = e.target
        console.log(name, value, state);
        setState( { ...state, [name]: value} )
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const data = state
        console.log(state, data);
        const url = 'https://masai-api-mocker.herokuapp.com/auth/register'
        fetch(url, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            window.location.href = "/login";
            })
            .catch((error) => {
            console.error('Error:', error);
            });
        
    }

    <ContextProvider>
       <>{state}</>
    </ContextProvider>

  return (
    <>
        <div>Register</div>
        <form onSubmit={handleSubmit}>
        <label>
         Enter your credential to login
          <br />
          <input type='text' name='name' onChange={handleChange} value={state.name} placeholder='name' />
          <br />
          <input type='text' name='email' onChange={handleChange} value={state.email} placeholder='email' />
          <br />
          <input type='password' name='password' onChange={handleChange} value={state.password} placeholder='password' />
          <br />
          <input type='text' name='username' onChange={handleChange} value={state.username} placeholder='username' />
          <br />
          <input type='text' name='mobile' onChange={handleChange} value={state.mobile} placeholder='mobile no.' />
          <br />
          <input type='text' name='description' onChange={handleChange} value={state.description} placeholder='description' />
          <br />
          
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
    
  )
}

export default Register
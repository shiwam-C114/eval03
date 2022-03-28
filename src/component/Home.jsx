import React, { useContext, useState } from 'react'
import { Context } from '../context'


function Home() {

    const initState = {
        name: "",
        email: "",
        password: "",
        username: "",
        mobile: "",
        description: ""
      }
    const [state, setState] = useState(initState)
    const value = useContext(Context)

    function getDetail() {
        
        console.log(value);
        const url = "https://masai-api-mocker.herokuapp.com/user/"+ initState.username
        fetch(url).then(res=>res.json()).then(data=>{console.log(data)})

    }
    getDetail()
  return (
      <>
        <div>Home</div>
        <div>name:{state.name}</div>
      </>
  )
}

export default Home
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { 
  PublicRouter,
   PrivateRouter 
} from "./router"

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  useEffect(()=>{
    fetch('http://localhost:4000/api/session', {credentials: 'include'})
    .then(res=>{
      if(res.status >= 200 && res.status < 300){
        setLoginStatus(true);
      }
    })
  },[])
  return (
    <div>
      {loginStatus ? <PrivateRouter/> : <PublicRouter/>}      
    </div>
  )
}

export default App

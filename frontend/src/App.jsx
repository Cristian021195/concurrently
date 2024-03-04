/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { 
  PublicRouter,
   PrivateRouter 
} from "./router"
import { useSession } from "./hooks/useSession"

function App() {
  const {loginStatus, setLoginStatus} = useSession();
  return (
    <div>
      {loginStatus === true ? <PrivateRouter/> : <PublicRouter/>}      
    </div>
  )
}

export default App

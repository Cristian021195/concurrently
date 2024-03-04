import { useEffect, useState } from "react";

export const useSession = () => {
    const [loginStatus, setLoginStatus] = useState(false);
    useEffect(()=>{
        fetch('http://localhost:4000/api/session', {credentials: 'include'})
        .then(res=>{
        if(res.status >= 200 && res.status < 300){
            setLoginStatus(true);
        }else{
            setLoginStatus(false);
        }
        })
        .catch((err)=>{
            console.log(err);
            setLoginStatus(false);
        })
        
    },[loginStatus])

  return {
    loginStatus, setLoginStatus
  }
}

import { useEffect, useState } from "react";
const BK_URL = import.meta.env.VITE_BACKEND_URL;

export const useSession = () => {
    const [loginStatus, setLoginStatus] = useState(false);
    useEffect(()=>{
        fetch(BK_URL+'/api/session', {credentials: 'include'})
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

import { Link } from "react-router-dom"
import { MainLayout } from "../components/Layout"
const BK_URL = import.meta.env.VITE_BACKEND_URL;

export const LogOut = () => {
  return (
    <MainLayout title="LogOut">
        <div>
          <div className="d-flex justify-content-center p-1">
            <h2>¿Exit?</h2>
          </div>
          <div className="d-flex justify-content-center gap-1 p-1">
            <button className="btn bg-orange" onClick={async ()=>{
              try{
                let pet = await fetch(BK_URL+'/api/session/logout', {method:'POST', credentials:'include'});
                if(pet.status >= 200 && pet.status < 300){
                  document.cookie = 'token=; Path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
                  window.location.href = window.location.origin;
                }
              }catch(err){
                console.log(err);
              }
            }}>Yes</button>
            <Link to={'/home'} className="btn bg-dark">No</Link>
          </div>
        </div>
    </MainLayout>
  )
}

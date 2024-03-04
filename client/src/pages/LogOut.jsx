import { Link } from "react-router-dom"
import { MainLayout } from "../components/Layout"

export const LogOut = () => {
  return (
    <MainLayout title="LogOut">
        <div>
          <div className="d-flex justify-content-center p-1">
            <h2>¿Exit?</h2>
          </div>
          <div className="d-flex justify-content-center gap-1 p-1">
            <button className="btn bg-orange" onClick={()=>{
              document.cookie = 'token=; domain=localhost:5173; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            }}>Yes</button>
            <Link to={'/home'} className="btn bg-dark">No</Link>
          </div>
        </div>
    </MainLayout>
  )
}

/* eslint-disable no-unused-vars */
import { useState } from "react";
import { MainLayout } from "../components/Layout"
const BK_URL = import.meta.env.VITE_BACKEND_URL;

export const Login = () => {
    const [formdata, setFormData] = useState({mail:'',password:''});
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e)=> {
        e.preventDefault();
        setLoading(true);
        try {
            let pet = await fetch(BK_URL+'/api/login', {
                method:'POST', body: JSON.stringify(formdata),
                headers: {'Content-Type':'application/json'},
                credentials: 'include',
            });
            let data = await pet.json();
            if(pet.status >= 200 && pet.status <300){
                window.location.href = window.location.origin;
            }else{
                alert(data.msg);
            }
            
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }
    return (
      <MainLayout title="Login">
        <div className="center-all">
          <form onSubmit={handleSubmit} className="login">
              <label htmlFor="mail">Mail: </label>
              <input className="input p-05" type="email" name="mail" id="mail" 
              minLength={5} required maxLength={50} placeholder="yourmail@notes.com" onChange={(e)=>{setFormData({...formdata, mail: e.target.value })}}/>
              <label htmlFor="password">Password: </label>
              <input className="input p-05" type="password" name="password" id="password" 
              minLength={5} required maxLength={50} placeholder="**********" onChange={(e)=>{setFormData({...formdata, password: e.target.value })}}/>
              <div className="center-all m-1">
                  <button type="submit" className="btn bg-orange" disabled={loading}>{loading ? 'Wait...' : 'LogIn'}</button>
              </div>
          </form>
        </div>
      </MainLayout>
    )
}

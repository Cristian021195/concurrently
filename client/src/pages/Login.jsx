/* eslint-disable no-unused-vars */
import { useState } from "react";
import { MainLayout } from "../components/Layout"
import { useFetchPost } from "../hooks/useFetch";

export const Login = () => {
    const [formdata, setFormData] = useState({mail:'',password:''});
    //const {data, error, loading, refetch} = useFetchPost('http://localhost:4000/api/login', JSON.stringify(formdata));
    const handleSubmit = async (e)=> {
        e.preventDefault();
        try {
            let pet = await fetch('http://localhost:4000/api/login', {
                method:'POST', body: JSON.stringify(formdata),
                headers: {'Content-Type':'application/json'},
                credentials: 'include',
            });
            let data = await pet.json();
            if(pet.status >= 200 && pet.status <300){
                window.location.href = window.location.origin;
            }
            
        } catch (error) {
            console.log(error)
        }
    }
    return (
      <MainLayout title="Login">
          <form onSubmit={handleSubmit}>
              <div>{}</div>
              <label htmlFor="mail">Mail: </label>
              <input className="input p-05" type="email" name="mail" id="mail" 
              minLength={5} required maxLength={50} placeholder="yourmail@notes.com" onChange={(e)=>{setFormData({...formdata, mail: e.target.value })}}/>
              <label htmlFor="password">Password: </label>
              <input className="input p-05" type="password" name="password" id="password" 
              minLength={5} required maxLength={50} placeholder="**********" onChange={(e)=>{setFormData({...formdata, password: e.target.value })}}/>
              <div className="center-all m-1">
                  <button type="submit" className="btn bg-orange">LogIn</button>
              </div>
          </form>
      </MainLayout>
    )
}

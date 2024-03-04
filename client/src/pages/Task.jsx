import { useEffect, useState } from "react";
import { MainLayout } from "../components/Layout"
import { useNavigate, useParams } from 'react-router-dom';
export const Task = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const [fData, setFdata] = useState({title:'', content:'', categories:'', archived:false});
  useEffect(()=>{
    fetch('http://localhost:4000/api/notas/'+params.id, {credentials:'include'})
    .then(res=>res.json())
    .then(res=>{
      setFdata({
        title: res.data.title,
        content: res.data.content,
        categories: res.data.categories,
        archived : res.data.archived
      })
    })
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let pet = await fetch('http://localhost:4000/api/notas/'+params.id, {credentials:'include', method:'PUT', body: JSON.stringify(fData), 
        headers:{
          'Content-Type':'application/json'
        }
      })
      if(pet.status >= 200 && pet.status < 300){
        alert('Edited!');
      }
    } catch (error) {
      alert(error.toString());
      setErrors(error.toString());
    }finally{
      setLoading(false);
    }
  }

  const deleteNote = async ()=>{
    try {
      let pet = await fetch("http://localhost:4000/api/notas/"+params.id, {method:'DELETE', credentials:'include'});
      if(pet.status >= 200 && pet.status < 300){
        alert('Deleted!');
        navigate(-1);
      }
    } catch (error) {
      alert(error.toString());
      setErrors(error.toString());
    }
  }

  return (
    <MainLayout title={"Task #"+params.id+" ("+fData.title+")"}>
      <div className="center-all">        
        <form className="form" onSubmit={handleSubmit}>
          <div>{errors}</div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" className="input" placeholder="Titulo" minLength={5} maxLength={50} required
            onChange={(e)=>{ setFdata({...fData, title:e.target.value}) }}  defaultValue={fData.title}/>
          <label htmlFor="archived">Archived: </label>
          <input type="checkbox" name="archived" id="archived" checked={fData.archived} onChange={(e)=>{
              setFdata({...fData, archived: e.target.checked})}
          }/>
          <label htmlFor="content">Content: </label>
          <textarea name="content" id="content" rows="10" maxLength={512} minLength={5} required defaultValue={fData.content}
            onChange={(e)=>{ setFdata({...fData, content:e.target.value})}}></textarea>
          <label htmlFor="category">Category: </label>
          <div className="d-flex">
            <p>&nbsp;Categories (max: 3): {fData.categories}</p>
          </div>
          <div className="d-flex justify-content-between m-1">
            <button type="submit" className="btn bg-orange" disabled={loading}>{loading ? 'Loading...' : 'Save'}</button>
            <button type="button" className="btn bg-dark" disabled={loading} onClick={()=>{deleteNote(params.id)}} >{loading ? 'Loading...' : 'Delete'}</button>
          </div>
        </form>
      </div>
    </MainLayout>
  )//fData.category?.join(',')
}

import { useState } from "react"
import { MainLayout } from "../components/Layout"
export const NewTask = () => {
  const [fData, setFdata] = useState({title:'Titulo', content:'Contenido...', category:'important'});
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [categories, setCategories] = useState(['important']);
  const [currentCat, setCurrentCat] = useState("important");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      let pet = await fetch('http://localhost:4000/api/notas/', {
        credentials:'include',
        method:'POST',
        body: JSON.stringify({...fData, category: categories}),
        headers:{'Content-Type':'application/json'}
      });
      if(pet.status >= 200 && pet.status < 300){
        alert('saved!');
        setFdata({title:'Titulo', content:'Contenido...', category:'important'});
      }
    } catch (error) {
      setErrors(error?.message);
    }finally{
      setLoading(false);
    }
  }

  return (
    <MainLayout title="New Task">
      <div className="center-all">        
        <form className="form" onSubmit={handleSubmit}>
          <div>{errors}</div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" className="input" placeholder="Titulo" minLength={5} maxLength={50} required
          onChange={(e)=>{ setFdata({...fData, title:e.target.value}) }}  defaultValue={fData.title}/>
          <label htmlFor="content">Content: </label>
          <textarea name="content" id="content" rows="10" maxLength={512} minLength={5} required defaultValue={fData.content}
          onChange={(e)=>{ setFdata({...fData, content:e.target.value}) }}  ></textarea>
          <label htmlFor="category">Category: </label>
          <div className="d-flex">
            <select className="select" name="category" id="category"
              onChange={(e)=>{
                setCurrentCat(e.target.value);
              }}
            >
              <option value="important">#important</option>
              <option value="urgent">#urgent</option>
              <option value="normal">#normal</option>
              <option value="personal">#personal</option>
              <option value="business">#business</option>
              <option value="vacation">#vacation</option>
              <option value="holiday">#holiday</option>
              <option value="shop">#shop</option>
              <option value="studies">#studies</option>
              <option value="pets">#pets</option>
              <option value="money">#money</option>
              <option value="events">#events</option>
              <option value="memory">#memory</option>
            </select>
            <button type="button" className="btn btn-sm bg-dark" onClick={()=>{
              if(!categories.includes(currentCat) && categories.length < 3){
                setCategories([...categories, currentCat]);
              }              
            }}>Add</button>
            <p>&nbsp;Categories (max: 3): {categories?.join(',')}</p>
          </div>
          
          <div className="center-all">
            <button type="submit" className="btn bg-orange" disabled={loading}>{loading ? 'Loading...' : 'Save'}</button>
          </div>
        </form>
      </div>
    </MainLayout>
  )
}

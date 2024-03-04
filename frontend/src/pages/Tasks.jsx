import { useEffect, useState } from "react"
import { MainLayout } from "../components/Layout"
import { Card, NewCard, TitleLoader } from "../components/UI"
const BK_URL = import.meta.env.VITE_BACKEND_URL;

export const Tasks = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState({categories:'all', status:'unarchived'});

    useEffect(()=>{
        setLoading(true);
        if(filter.categories == 'all'){
            fetch(BK_URL+'/api/notas/',{credentials:'include'})
            .then(res=>{
                return res.json();
            })
            .then(res=>{setData(res.data)})
            .catch(err=>{console.log(err)})
            .finally(()=>{setLoading(false)})
        }else{
            fetch(BK_URL+`/api/notas/filter/${filter.categories}/${filter.status}`,{credentials:'include'})
            .then(res=>{
                return res.json();
            })
            .then(res=>{setData(res.data)})
            .catch(err=>{console.log(err)})
            .finally(()=>{setLoading(false)})
        }
    },[filter])
    return (
        <MainLayout title="Tasks">
            <form className="d-flex justify-content-end flex-wrap">
                <label htmlFor="categories">Categories
                <select className="select" name="categories" id="categories" onChange={(e)=>{
                    setFilter({...filter, categories:e.target.value})
                }}>
                    <option value="all">all (default)</option>
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
                </label>
                <label htmlFor="status">Status
                <select className="select" name="status" id="status" onChange={(e)=>{
                    setFilter({...filter, status:e.target.value})
                }}>
                    <option value="unarchived">unarchived (default)</option>
                    <option value="archived">archived</option>
                </select>
                </label>
            </form>
            <div className="">
                {
                    loading ? <TitleLoader/>
                    :   <div className="d-flex gap-1 full">
                            <NewCard/>
                            {
                                data.length === 0 ? 
                                <p><b>no data</b><br/></p> :
                                data.map((e, ei)=>{
                                    return <Card key={ei} title={e.title} content={e.content} id={e.id}/>
                                })
                            }
                        </div>
                }
            </div>
        </MainLayout>
    )
}
/*

{
                    loading
                    ? <TitleLoader/>
                    :   <div className="d-flex gap-1">
                            {data.map((e, ei)=>{
                                return <Card key={ei} title={e.title} content={e.content} id={e.id}/>
                            })}
                        </div>
                }

<Card content="alsdlasld alsdl asldals dlasd lalslasd lasl alsd lasd lasl lasdlasld alsd las" id={1}></Card>
            <Card content="alsdlasld alsdl asldals dlasd lalslasd lasl alsd lasd lasl lasdlasld alsd las" id={2}></Card>
*/
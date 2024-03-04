import { MainLayout } from "../components/Layout"
import { Card, TitleLoader } from "../components/UI"

export const Tasks = () => {
  return (
    <MainLayout title="Tasks">
        <form>
            <label htmlFor="categories">Categories</label>
            <select className="select" name="categories" id="categories">
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
            <label htmlFor="status">Status</label>
            <select className="select" name="status" id="status">
                <option value="unarchived">unarchived (default)</option>
                <option value="archived">archived</option>
            </select>
        </form>
        <div className="d-flex gap-1">
            <TitleLoader/>
            <Card content="alsdlasld alsdl asldals dlasd lalslasd lasl alsd lasd lasl lasdlasld alsd las" id={1}></Card>
            <Card content="alsdlasld alsdl asldals dlasd lalslasd lasl alsd lasd lasl lasdlasld alsd las" id={2}></Card>
        </div>
    </MainLayout>
  )
}
/*
<Card content="alsdlasld alsdl asldals dlasd lalslasd lasl alsd lasd lasl lasdlasld alsd las" id={1}></Card>
            <Card content="alsdlasld alsdl asldals dlasd lalslasd lasl alsd lasd lasl lasdlasld alsd las" id={2}></Card>
*/
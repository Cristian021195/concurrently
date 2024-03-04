import { MainLayout } from "../components/Layout"
import { useParams } from 'react-router-dom';
export const Task = () => {
  const params = useParams();
  return (
    <MainLayout title={"Task #"+params.id}>
      <div>this task</div>
    </MainLayout>
  )
}

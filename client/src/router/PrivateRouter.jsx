import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PrivateHeader } from '../components/Layout'
import { About, Home, Task, Tasks, LogOut, NewTask} from '../pages'

export const PrivateRouter = () => {
  return (
    <BrowserRouter>
      <PrivateHeader/>
      <Routes>
            <Route index path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/logout' element={<LogOut/>}></Route>
            <Route path='/tasks' element={<Tasks/>}></Route>
            <Route path='/tasks/:id' element={<Task/>}></Route>
            <Route path='/tasks/new' element={<NewTask/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

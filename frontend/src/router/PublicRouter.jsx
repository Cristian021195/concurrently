import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PublicHeader } from '../components/Layout'
import { About, Home, Login } from '../pages'

export const PublicRouter = () => {
  return (
    <BrowserRouter>
      <PublicHeader/>
        <Routes>
          <Route index path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

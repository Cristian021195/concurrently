import { NavLink } from "react-router-dom"

export const PublicHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink className={({isActive}) => isActive ? "active" : ""} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? "active" : ""} to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? "active" : ""} to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

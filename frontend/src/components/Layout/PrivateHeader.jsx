import { NavLink } from "react-router-dom"

export const PrivateHeader = () => {
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
            <NavLink className={({isActive}) => isActive ? "active" : ""} to="/tasks">Tasks</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? "active" : ""} to="/logout">Logout</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

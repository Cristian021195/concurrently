/* eslint-disable react/prop-types */
export const MainLayout = ({children, title="Title"}) => {
  return (
    <div>
        <h1 className="mt-7">{title}</h1>
        <div className="m-1 p-1">
            {children}
        </div>
    </div>
  )
}

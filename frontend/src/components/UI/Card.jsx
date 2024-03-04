import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
export const Card = ({title="title", content="content", id=1}) => {
  return (
    <div className="card p-05">
        <div className="d-flex gap-1 justify-content-between">
            <div className="card-title"><b>{title}</b></div>
            <Link to={'/tasks/'+id} className="btn btn-sm bg-dark">Go</Link>
        </div>
        <div className="card-body mt-1">
            <small><i>{content.slice(0,100)+"..."}</i></small>
        </div>
    </div>
  )
}

import image from '../assets/news.png'
const NewItems = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-4 d-inline-block my-4 mx-4 px-2 py-2" style={{maxWidth:"345px"}}>
    <img src={src?src:image} style={{height:"200px",width:"328px"}} className="card-img-top" alt="" />
    <div className="card-body">
      <h5 className="card-title">{title.slice(0,50)}</h5>
      <p className="card-text">{description?description.slice(0,90):"News is a report os a current event. It is Information about something that has just happened"}</p>
      <a href={url} className="btn btn-primary">Read More</a>
    </div>
  </div>
  )
}

export default NewItems
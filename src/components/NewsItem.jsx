

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-light mb-3 mx-3 d-inline-block" style={{ maxWidth: "345px", minHeight: "500px" }}>
      <img 
        src={src} 
        className="card-img-top img-fluid" 
        alt="News thumbnail"
        style={{ height: "200px", objectFit: "cover", width: "100%" }}
      />
      <div className="card-body d-flex flex-column" style={{ height: "300px" }}>
        <h5 className="card-title text-center fw-bold mb-3" style={{ height: "60px", overflow: "hidden" }}>{title}</h5>
        <p className="card-text flex-grow-1 mb-4" style={{ height: "150px", overflow: "hidden" }}>{description}</p>
        <a 
          href={url} 
          className="btn btn-primary w-100 mt-auto" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  )
}

export default NewsItem
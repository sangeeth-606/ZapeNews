const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="/">
          <span className="badge bg-danger fs-5">ZapeNews</span>
        </a>
        <div className="d-flex gap-4">
          <a className="text-white text-decoration-none" href="/">Home</a>
          <a className="text-white text-decoration-none" href="/business">Business</a>
          <a className="text-white text-decoration-none" href="/technology">Technology</a>
          <a className="text-white text-decoration-none" href="/sports">Sports</a>
        </div>
        <form className="d-flex">
          <input 
            className="form-control me-2" 
            type="search" 
            placeholder="Search news..." 
            aria-label="Search"
          />
          <button className="btn btn-danger" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}

export default NavBar
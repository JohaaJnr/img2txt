import React from 'react'

const Navbar = () => {
  return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid mx-4 p-2">
                  <a className="navbar-brand" href="#">Image2Txt</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarColor02"> 

                      <ul className="navbar-nav me-auto">

                          <li className="nav-item">
                              <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">About</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#" >Author</a>
                          </li>

                      </ul>


                      <form className="d-flex">
                          <input className="form-control me-sm-2" type="text" placeholder="Search" />
                              <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                      </form>               
                  </div>
              </div>
          </nav>

          <div className="offcanvas offcanvas-start" style={{ width: '60%'}} data-bs-scroll="true" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
              <div className="offcanvas-header" style={{ backgroundColor: '#EB6864', height: '100px' }}>
                  <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel" style={{ color: 'white' }}>Image2Txt</h5>
                  <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" style={{ color: 'white'}} aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                  <ul className="list-group list-group-flush">
                      <li className="list-group-item"><a className='nav-link' href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">About</a></li>
                      <li className="list-group-item"> <a className='nav-link' href="#">Author</a></li>
                      <li className="list-group-item"> <a className='nav-link' href="#">Github</a></li>
                     
                  </ul>
              </div>
          </div>

          
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                          ...
                      </div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-primary">Understood</button>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Navbar
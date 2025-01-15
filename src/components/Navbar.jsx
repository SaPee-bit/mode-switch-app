import ImportantDevicesOutlinedIcon from '@mui/icons-material/ImportantDevicesOutlined'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined'
import { Button } from 'react-bootstrap'

export const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light shadow">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/">
          <ImportantDevicesOutlinedIcon className="me-2 white" />
          <span className='white'>SaPee Developer</span>
        </a>
        <Button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <ArrowDropDownOutlinedIcon className="py-3" />
        </Button>
        <div className="container px-3">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
              <li className="nav-item">
                <a className="nav-link me-lg-3" href="../"><span className='white'>Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-lg-3" href="#about"><span className='white'>About</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-lg-3" href="../"><span className='white'>Projects</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-lg-3" href="#testimonials"><span className='white'>Testimonials</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-lg-3" href="#contact"><span className='white'>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </nav>
    <hr className="line"></hr>
    </div>
  )
}

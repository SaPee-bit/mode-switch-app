import { Button } from "react-bootstrap"
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined'
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'

export const Products = () => {
  return (
    <div>
      <section className="container px-4 py-5">
                   <h2 className="white text-center fw-bold pb-2">Benefits</h2>
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-xxl-6">
                            <div className="d-flex flex-column gap-2 align-items-start py-5">
                              <h3 className="white fw-bold">Dark Mode, Bright Ideas</h3>
                              <p className="text-secondary">
                                Easily switch between light and dark modes with our intuitive mode switcher. Perfect for users who want to customize their browsing experience.
                              </p>
                              <Button type="button" className="btn btn-primary btn-lg text-white text-uppercase px-4 me-sm-3 rounded-0">
                                Subscribe
                                <SubscriptionsOutlinedIcon className="material-icons-outlined ms-2" />
                              </Button>
                            </div>
                        </div>
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="row row-cols-sm-2 g-4">
                                <div className="d-flex flex-column gap-2">
                                    <div className="product-icon d-inline-flex align-items-center justify-content-center bg-primary text-white fs-4 rounded-0">
                                        <i className="bi bi-archive"><ArchiveOutlinedIcon/></i>
                                    </div>
                                    <h4 className="white fw-semibold mb-0">Reduce Eye Strain</h4>
                                    <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
              
                                <div className="d-flex flex-column gap-2">
                                    <div className="product-icon d-inline-flex align-items-center justify-content-center bg-primary text-white fs-4 rounded-0">
                                        <i className="bi bi-gear"><SettingsSuggestOutlinedIcon />;</i>
                                    </div>
                                    <h4 className="white fw-semibold mb-0">Improve Readability</h4>
                                    <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
              
                                <div className="d-flex flex-column gap-2">
                                    <div className="product-icon d-inline-flex align-items-center justify-content-center bg-primary text-white fs-4 rounded-0">
                                        <i className="bi bi-camera"><CameraAltOutlinedIcon/></i>
                                    </div>
                                    <h4 className="white fw-semibold mb-0">Enhance UI</h4>
                                    <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
              
                                <div className="d-flex flex-column gap-2">
                                    <div className="product-icon d-inline-flex align-items-center justify-content-center bg-primary text-white fs-4 rounded-0">
                                        <i className="bi bi-cart"><AddShoppingCartOutlinedIcon/></i>
                                    </div>
                                    <h4 className="white fw-semibold mb-0">Easy to Use</h4>
                                    <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    </div>
  )
}

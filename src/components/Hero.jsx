import { Button } from "react-bootstrap"
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

export const Hero = () => {
  return (
    <div>
            <section className="py-5">
                <div className="container px-5">
                    
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                        
                            <div className="text-center my-5">
                                
                                <h2 className="white fw-bold mb-2">Toggle Your World</h2>
                                
                                <h2 className="text-primary fw-bold mb-2">switch it like you mean it!</h2>
                                <p className="lead text-secondary mb-4">
                                    Elevate your browsing experience with our seamless mode switching. Take control of your screen with a single click.
                                </p>
                                <div className="d-grid gap-2 d-sm-flex justify-content-center mb-5">
                                    <Button type="button" className="btn btn-primary btn-lg text-white text-uppercase pr-2 me-ms-3 rounded-0">
                                        Learn More
                                        <HelpOutlineOutlinedIcon className="material-icons-outlined ms-2" />
                                    </Button>
                                    <Button type="button" id="demo" className="btn bg- btn-outline-primary btn-lg  text-uppercase pr-2 me-ms-3 rounded-0">
                                        View Demo
                                        <PlayCircleFilledWhiteOutlinedIcon className="material-icons-outlined ms-2"/>
                                    </Button>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-xxl-6 justifiy-content-center">
                            <img className="img-fluid rounded-2 my-5" src="/hero.jpg" alt="Hero Image"/>
                        </div>
                    </div>
                </div>
            </section>

    </div>
  )
}

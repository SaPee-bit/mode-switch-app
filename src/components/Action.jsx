import { Button } from "react-bootstrap"

export const Action = () => {
  return (
      <section className="action bg-primary px-5 p-sm-5 nt-5">
            <div className="d-flex flex-xl-row flex-column align-items-center justify-content-between">
                <div className=" mb-4 mb-xl-0">
                    <p className="text-white fs-3 fw-bold">New products, delivered to you.</p>
                    <p className="text-white-50">Sign up for our newsletter fo the latest update</p>
                </div>

                <div className="ms-xl-4">
                    <div className="input-group mb-2">
                        
                        <input type="email" className="form-control rounded-0" placeholder="Email address..."/>
                        
                        <Button type="button" className="btn btn-outline-light rounded-0">Sign Up</Button>
                    </div>
                    <p className="small text-white-50">We care about privacy and will never share your data.</p>
                </div>
            </div>
        </section>
  )
}
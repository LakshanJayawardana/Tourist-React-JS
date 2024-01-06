import React from 'react'
import { Link } from 'react-router-dom'

const HeroAccount = () => {
  return (
    <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">My Account</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><Link to={"/login"}>Login</Link></li>
                  <li className="breadcrumb-item"><Link to={"/register"}>Register</Link></li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HeroAccount
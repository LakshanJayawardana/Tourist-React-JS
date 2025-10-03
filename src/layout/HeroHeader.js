import React from 'react'

const HeroHeader = ({title,dese}) => {

    console.log(title)
  return (
    <div className="container-fluid bg-primary py-5 mb-5 hero-header">
            <div className="container py-5">
                <div className="row justify-content-center py-5">
                    <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">{title}</h1>
                        <p className="fs-4 text-white mb-4 animated slideInDown">{dese}</p>
                        {/* Search removed per request */}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default HeroHeader
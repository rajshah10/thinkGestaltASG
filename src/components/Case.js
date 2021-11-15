import React from 'react'
import "../css/case.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import UseCase from './UseCase';
const Case = ({image1,image2}) => {
    return (
        <div className="case">
                <h1><span>Case</span> Studies</h1>
                <div className="car" >
                    <Carousel showThumbs={false} height="100px" width="700px">
                    <div>
                        <img src={image1} />
                    </div>
                    <div>
                        <img src={image2} />
                    </div>
                    </Carousel>
                </div>
                <p>With a decade of experience in <span className="bold">Web & Software Solutions</span>, access to <span className="bold">top tier talent</span>, we Fast Track the entire process and drive organisational change from within. We bring <span className="bold">careful planning, alignment, and aggressive execution</span> so that you can glimpse the <u>Future today</u>.</p>

              <UseCase/>  
        </div>
    )
}

export default Case

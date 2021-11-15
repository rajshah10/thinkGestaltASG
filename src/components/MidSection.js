import React from 'react'
import "../css/MidSection.css"
import Services from './Services'
const MidSection = ({paragraphOne,paragraphTwo,image,imageTwo}) => {
    return (
        <div className="MidSection">
                <div className="mid">
                    <div className="leftMid">
                            <div className="leftMid-text">
                                    <div><span className="r-text">We <span className="l-text">Are</span></span></div>
                                    <div style={{marginTop:"-27px"}}><span className="t-text">think</span></div>
                                    <div style={{marginTop:"-27px"}}><span className="r-text">gestalt</span></div>
                            </div>
                    </div>
                    <div className="rightMid">
                        <div className="riht-image">
                                <img src={image}></img>
                        </div>
                    </div>
                    
                </div>
                <div className="text-para"> 
                        <p>{paragraphOne}</p>
                </div>

                <div className="secondSection">
                    <div className="secondSection--text">
                        <h1>What We <span className="s-text">Do</span></h1>
                    </div>
                    <div className="bottomSection">
                        <div className="btm--image">
                            <img src={imageTwo}></img>
                        </div>
                        <div className="btm--text">
                            <p>{paragraphTwo}</p>
                        </div>
                    </div>
                </div>
                <Services 
                    paragraph="Stitching tech stacks to come up with a comprehensive solution
                    that transforms your business."
                />
        </div>
        
    )
}

export default MidSection

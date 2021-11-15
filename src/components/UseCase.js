import React from 'react'
import "../css/useCase.css"
import Contact from './Contact'
const UseCase = () => {
    return (
        <div className="useCase">
                <div className="usecaseOne">
                    <p>Built For Mission-</p>
                    <h1>Critical Use Cases</h1>
                </div>
                <div className="role">
                    <h6>By Role</h6>
                </div>
                <div class="grid-container">
                    <div class="grid-item">CTO</div>
                    <div class="grid-item">Agency Director</div>
                    <div class="grid-item">Product Manager</div>  
                    <div class="grid-item">Engineering VP</div>
                    <div class="grid-item">Design Director</div>
                    <div class="grid-item">Project Manager</div>  
                   
                </div>
                <h6 className="load">Load More</h6>
                <Contact/>
        </div>
    )
}

export default UseCase

import React from 'react'
import "../css/contact.css"
const Contact = () => {
    return (
        <div className="contact">
            <div className="contactus">
                <h1><span>Let’s talk.</span> Just enter your details and we will reply within 24 hours</h1>
            </div>
            <div className="form">
                <div>   
                        <img src="https://thinkgestalt.com/wp-content/uploads/2021/03/services.png"></img>
                </div>
                <div className="formarea">
                    <form>
                        <input type="text" placeholder="Name*"/>&nbsp;<input type="text" placeholder="Phone Number*"/><br/>
                        <input type="email" placeholder="Email*"></input><br/>
                        <label className="label" for="">How can we help you?</label><br/>
                        <textarea
                            rows="5"
                        >
                        </textarea>
                        <button class="button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact

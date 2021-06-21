import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import Button from '@material-ui/core/Button';

const Contact = () => {
    return (
        <div className="contactpage">
          <ul className="ull">
            <li className="li"><span className="phoneicon"><PhoneIcon/></span>  Phone <br></br> 334423232</li>
            <li className="li"><span className="phoneicon"><MailOutlineIcon/></span> Email<br></br> shamsabdullah318@gmail.com</li>
            <li className="li"><span className="phoneicon"><HomeOutlinedIcon/></span> Adress<br></br> sec 11c 5 bffor zon</li>
          </ul>
        <div>
            <h2 className="h1">Get In Touch</h2>
        </div>
          <div className="contact_form">
            <form className="contact_form">
              <div className="input">
              <input className="contact_input" type="text" placeholder="Your name" required="true"/>
              <input className="contact_input" type="email" placeholder="Your email" required="true"/>
              <input className="contact_input" type="number" placeholder="Your phone" required="true"/>
              </div>
              <br></br>
              <div className="contact_message">
                <br></br>
              <textarea placeholder="Type Your Message" cols="84" rows="7"></textarea>
              <Button type="submit" className="btnhamara" variant="contained" color="primary">
                  Send Message
              </Button>

              </div> 
                                                      
            </form>
          
          </div>

        </div>
      )
}

export default Contact

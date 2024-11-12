import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li><a>Audio Description</a></li>
        <li><a>Help Center</a></li>
        <li><a>Gift Cards</a></li>
        <li><a>Media Center</a></li>
        <li><a>Investor Relations</a></li>
        <li><a>Jobs</a></li>
        <li><a>Loonflix Shop</a></li>
        <li><a>Terms of Use</a></li>
        <li><a>Privacy</a></li>
        <li><a>Legal Notices</a></li>
        <li><a>Cookie Preferences</a></li>
        <li><a>Corporate Information</a></li>
        <li><a>Contact Us</a></li>
        <li><a>Do Not Sell or Share My Personal Information</a></li>
        <li><a>Ad Choices</a></li>
      </ul>
      <div className="service-code">Service Code</div>
      <p className="copyright-text">© 1997 - 2024 Loonflix, Inc.</p>
    </div>
  )
}

export default Footer

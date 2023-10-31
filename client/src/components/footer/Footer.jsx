import "./footer.css";
import {FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="footer">
      <div className="footericons">
        <a href="https://twitter.com/Inacapinos"><FaTwitter className="footerIcon" /></a>
        <a href="https://www.linkedin.com/school/inacap/"><FaLinkedin className="footerIcon" /></a>
      </div>
      <div className="fText">Copyright © 2023 Victor Muñoz , Carlos Muñoz , Ricardo Rojas</div>
    </div>
  );
};

export default Footer;
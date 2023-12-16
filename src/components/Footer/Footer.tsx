import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./footer.scss";
export function Footer() {
  return (
    <footer className="footer-basic">
      <div className="social">
        <Link to="#">
          <Icon icon="ion:logo-instagram" />
        </Link>
        <Link to="#">
          <Icon icon="ion:logo-snapchat" />
        </Link>
        <Link to="#">
          <Icon icon="ion:logo-twitter" />
        </Link>
        <Link to="#">
          <Icon icon="ion:logo-facebook" />
        </Link>
      </div>
      <ul className="list-inline">
        <li className="list-inline-item">
          <Link to="home">Home</Link>
        </li>
        <li className="list-inline-item">
          <Link to="/about">About</Link>
        </li>
        <li className="list-inline-item">
          <Link to="#">Services</Link>
        </li>
        <li className="list-inline-item">
          <Link to="#">Terms</Link>
        </li>
        <li className="list-inline-item">
          <Link to="#">Privacy Policy</Link>
        </li>
      </ul>
      <p className="copyright">Company Cisco © 2023</p>
    </footer>
  );
}

export default Footer;

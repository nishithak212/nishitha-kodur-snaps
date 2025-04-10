import "./Footer.scss";
import facebookIcon from "../../assets/Icons/Facebook.svg";
import twitterXIcon from "../../assets/Icons/X_twitter.svg";
import instagramIcon from "../../assets/Icons/Instagram.svg";
import pinterestIcon from "../../assets/Icons/Pinterest.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <h1 className="footer__title">Snaps</h1>
      <div className="footer__details">
        <ul className="footer__details footer__details--services">
          <li className="footer__item">For Photographers</li>
          <li className="footer__item">Hire Talent</li>
          <li className="footer__item">Inspiration</li>
        </ul>
        <ul className="footer__details footer__details--support">
          <li className="footer__item">About</li>
          <li className="footer__item">Careers</li>
          <li className="footer__item">Support</li>
        </ul>
      </div>
      <ul className="footer__list footer__list--social">
        <li className="footer__item">
          <a href="https://www.facebook.com">
            <img
              className="footer__icons"
              src={facebookIcon}
              alt="facebook-icon"
            />
          </a>
        </li>
        <li className="footer__item">
          <a href="https://x.com/?mx=2">
            <img
              className="footer__icons"
              src={twitterXIcon}
              alt="X-twitter-icon"
            />
          </a>
        </li>
        <li className="footer__item">
          <a href="https://www.instagram.com">
            <img
              className="footer__icons"
              src={instagramIcon}
              alt="instagram-icon"
            />
          </a>
        </li>
        <li className="footer__item">
          <a href="https://ca.pinterest.com/">
            <img
              className="footer__icons"
              src={pinterestIcon}
              alt="pinterest-icon"
            />
          </a>
        </li>
      </ul>
      <ul className="footer__list footer__list--watermark">
        <li className="footer__item">© 2024 Snaps</li>
        <li className="footer__item">Terms</li>
        <li className="footer__item">Privacy</li>
        <li className="footer__item">Cookies</li>
      </ul>
    </footer>
  );
}

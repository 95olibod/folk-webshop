import "./navbar.css";
import { Link } from "react-router-dom";

//Component with clickable logo in navbar
const HomeLogoButton = () => {
  return (
    <div className={"rootStyle"}>
      <Link to="/" className="noStyle">
        <button className="logoStyle">
          <img
            className="logoStyle"
            src="https://findicons.com/files/icons/1182/quickpix_2009/128/captain_america.png"
            alt=""
          />
      <p className="textStyle">FOLK</p>
        </button>
      </Link>
    </div>
  );
};

export default HomeLogoButton;

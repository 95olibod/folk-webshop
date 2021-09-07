import { CSSProperties } from "react";
import { Link } from "react-router-dom";

const HomeLogoButton = () => {
  return (
    <div style={rootStyle}>
      <Link to="/" style={noStyle}>
        <button style={logoStyle}>
          <img
            style={logoStyle}
            src="https://findicons.com/files/icons/1182/quickpix_2009/128/captain_america.png"
            alt=""
          />
      <p style={textStyle}>FOLK</p>
        </button>
      </Link>
    </div>
  );
};

const logoStyle: CSSProperties = {
  objectFit: "cover",
  width: "100%",
  height: "100%",
  border: "none",
  background: "transparent",
  display: "flex",
  flexDirection: "row",
  cursor: "pointer"
};
const rootStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  color: "white",
};

const textStyle: CSSProperties = {
  display: "flex",
  color: "white",
 
};

const noStyle: CSSProperties = {
 textDecoration: "none",
 
};
export default HomeLogoButton;

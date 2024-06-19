import { Link } from "react-router-dom";
import "./Button.css";
const Button = ({ name, slug, classes }) => {
  return (
    <button className={`${classes} custom-button`}>
      <Link to={`/${slug}`}>{name}</Link>
    </button>
  );
};
export default Button;

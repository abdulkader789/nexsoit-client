import { Link } from "react-router-dom";
import "./CustomButton.css";
const CustomButton = ({ name, slug, classes }) => {
  return (
    <button className={`${classes} custom-button`}>
      <Link to={`/${slug}`}>{name}</Link>
    </button>
  );
};
export default CustomButton;

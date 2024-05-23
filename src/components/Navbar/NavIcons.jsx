import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const socialIcons = [
  { Icon: FaFacebookF, text: "Facebook" },
  { Icon: FaTwitter, text: "Twitter" },
  { Icon: FaLinkedinIn, text: "LinkedIn" },
  { Icon: FaInstagram, text: "Instagram" },
];

const NavIcons = () => {
  return (
    <div className="flex justify-between">
      {socialIcons.map((socialIcon, index) => (
        <div
          key={index}
          className={`flex h-8 w-8  rounded-full border justify-center items-center ${
            index !== socialIcons.length - 1 ? "mr-10" : ""
          }`}
        >
          <socialIcon.Icon className="cursor-pointer text-sm" />
          <p className="hidden">{socialIcon.text}</p>
        </div>
      ))}
    </div>
  );
};

export default NavIcons;

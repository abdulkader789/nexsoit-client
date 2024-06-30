import { useEffect } from "react";
import CategoryClickProvider from "./contexts/CategoryClickContext";
import MobileNavContext from "./contexts/MobileNavContext";

const AppProvider = ({ children }) => {
  useEffect(() => {
    const onMouseMove = (e) => {
      let section = document.querySelector(".banner-section");
      let circle = document.createElement("span");
      circle.classList.add("circle-bubble"); // Add class 'circle-bubble' to the created span
      let x = e.offsetX;
      let y = e.offsetY;
      circle.style.left = x + "px";
      circle.style.top = y + "px";
      let size = Math.random() * 100;
      circle.style.width = 20 + size + "px";
      circle.style.height = 20 + size + "px";
      section.appendChild(circle);
      setTimeout(function () {
        circle.remove();
      }, 1800);
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return (
    <MobileNavContext>
      <CategoryClickProvider>{children}</CategoryClickProvider>
    </MobileNavContext>
  );
};

export default AppProvider;

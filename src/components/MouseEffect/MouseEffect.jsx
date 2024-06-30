import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const MouseEffect = ({ targetElement }) => {
  const circlesRef = useRef([]);

  useEffect(() => {
    const onMouseMove = (e) => {
      const { offsetX, offsetY } = e;
      const size = Math.random() * 100;

      const circle = document.createElement("span");
      circle.style.left = offsetX + "px";
      circle.style.top = offsetY + "px";
      circle.style.width = 20 + size + "px";
      circle.style.height = 20 + size + "px";

      targetElement.appendChild(circle); // Append to the specified target element
      circlesRef.current.push(circle);

      setTimeout(() => {
        circle.remove();
        circlesRef.current = circlesRef.current.filter((el) => el !== circle);
      }, 1800);
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      // Clean up remaining circles when component unmounts
      circlesRef.current.forEach((circle) => circle.remove());
      circlesRef.current = [];
    };
  }, [targetElement]);

  return null; // No visible DOM elements rendered by MouseEffect
};

export default MouseEffect;

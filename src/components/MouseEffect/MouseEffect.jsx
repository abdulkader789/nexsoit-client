import React, { useEffect, useState } from "react";
import "./MouseEffect.css"; // Import CSS file for styles

const MouseEffect = () => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { offsetX: x, offsetY: y } = e;
      const newCircle = { id: circles.length + 1, x, y };
      setCircles([...circles, newCircle]);
      setTimeout(() => removeCircle(newCircle.id), 1800);
    };

    const removeCircle = (id) => {
      setCircles(circles.filter((circle) => circle.id !== id));
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [circles]);

  return (
    <div className="mouse-effect-container">
      {circles.map((circle) => (
        <span
          key={circle.id}
          className="circle"
          style={{
            left: circle.x + "px",
            top: circle.y + "px",
            width: `calc(20px + ${Math.random() * 100}px)`,
            height: `calc(20px + ${Math.random() * 100}px)`,
          }}
        ></span>
      ))}
      <div className="logo">MOVE MOUSE</div>
    </div>
  );
};

export default MouseEffect;

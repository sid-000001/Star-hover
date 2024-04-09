import React, { useEffect, useState } from "react";

import "./style.css"; // Import CSS file for styling

const HeartAnimation = () => {
  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     const xPos = e.clientX;
  //     const yPos = e.clientY;

  //     const spanEl = document.createElement("span");

  //     spanEl.className = "heart"; // Apply heart class for styling

  //     spanEl.style.left = xPos + "px";
  //     spanEl.style.top = yPos + "px";

  //     const size = Math.random() * 100;
  //     spanEl.style.width = size + "px";
  //     spanEl.style.height = size + "px";
  //     console.log(document.body);
  //     document.body.appendChild(spanEl);

  //     setTimeout(() => {
  //       spanEl.remove();
  //     }, 3000);
  //   };

  //   document.body.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     document.body.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  useEffect(() => {
    function handleMouseMove(e) {
      const xPos = e.clientX;
      const yPos = e.clientY;

      const spanEl = document.createElement("span");

      spanEl.className = "heart";

      spanEl.style.left = xPos + "px";
      spanEl.style.top = yPos + "px";

      const size = Math.random() * 100;

      spanEl.style.width = size + "px";
      spanEl.style.height = size + "px";

      document.body.appendChild(spanEl);

      setTimeout(() => {
        spanEl.remove();
      }, 3000);
    }

    document.body.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // useEffect(() => {
  //   function handleMouseMove(e) {
  //     console.log("move");
  //   }

  //   document.addEventListener("mousemove", handleMouseMove);
  // }, []);

  // return <span></span>; // No need to render anything in React, everything is handled in the DOM
};

export default HeartAnimation;

"use client";

import { useState } from "react";

interface InteractiveCardProps {
  children: React.ReactNode;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`transition-all duration-300 ease-in-out p-4 ${
        isHovered ? "shadow-2xl bg-neutral-200" : "shadow-lg bg-white"
      } rounded-lg`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

export default InteractiveCard;

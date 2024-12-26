import React from "react";

interface SolidArrowProps {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
}

const SolidArrow: React.FC<SolidArrowProps> = ({
  width = 18,
  height = 16,
  fill = "#FFA41A",
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.26795 1C8.03775 -0.333333 9.96225 -0.333333 10.7321 1L17.6603 13C18.4301 14.3333 17.4678 16 15.9282 16H2.0718C0.532197 16 -0.430054 14.3333 0.339746 13L7.26795 1Z"
        fill={fill}
      />
    </svg>
  );
};

export default SolidArrow;

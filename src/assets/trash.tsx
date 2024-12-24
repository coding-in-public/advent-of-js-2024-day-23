import * as React from "react";

const Trash = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.995 3.85A2 2 0 0 0 14 2h-4l-.15.005A2 2 0 0 0 8 4v2H4l-.117.007A1 1 0 0 0 4 8h.08l.923 11.083.005.168C5.096 20.75 6.402 22 8 22h8l.176-.005A3 3 0 0 0 19 19l.92-11H20l.117-.007A1 1 0 0 0 20 6h-4V4l-.005-.15ZM14 6V4h-4v2h4ZM9 8H6.086L7 19a1 1 0 0 0 .883.993L8 20h8c.515 0 .94-.39.997-.959l.006-.124L17.913 8H9Zm1 2a1 1 0 0 1 .993.883L11 11v6a1 1 0 0 1-1.993.117L9 17v-6a1 1 0 0 1 1-1Zm4.993.883A1 1 0 0 0 13 11v6l.007.117A1 1 0 0 0 15 17v-6l-.007-.117Z"
      fill="#E51F1F"
    />
  </svg>
);

export default Trash;

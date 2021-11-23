import React from "react";

import "./styles.scss";

const CrossIcon = () => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 5L23 23M23 5L5 23"
        stroke="inherit"
        strokeWidth="6"
        strokeLinecap="square"
      />
    </svg>
  );
};

const TickIcon = () => {
  return (
    <svg
      width="31"
      height="24"
      viewBox="0 0 31 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26 5L12 19L5 12"
        stroke="inherit"
        strokeWidth="6"
        strokeLinecap="square"
      />
    </svg>
  );
};

interface StatusChecklistProps {
  items: {
    label: string;
    status: boolean;
  }[];
}

export const StatusChecklist = ({ items }: StatusChecklistProps) => {
  return (
    <ul className="mtfh-status-checklist">
      {items.map((item, index) => (
        <li key={index}>
          <span
            className={`mtfh-status-checklist__${item.status ? "tick" : "cross"}-icon`}
          >
            {item.status ? <TickIcon /> : <CrossIcon />}
          </span>

          {item.label}
        </li>
      ))}
    </ul>
  );
};

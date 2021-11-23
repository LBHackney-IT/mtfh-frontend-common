import React from "react";

import "./styles.scss";

interface ChecklistProps {
  items: {
    label: string;
    status: boolean;
  }[];
}

export const Checklist = ({ items }: ChecklistProps) => {
  return (
    <ul className="mtfh-checklist">
      {items.map((item) => (
        <li>{item.label}</li>
      ))}
    </ul>
  );
};

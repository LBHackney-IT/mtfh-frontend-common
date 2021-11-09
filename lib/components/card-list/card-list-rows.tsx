import React from "react";
import "./styles.scss";

export type CardListRow = {
  label: string;
  value: string;
};

export interface CardListRowsProp {
  rows: CardListRow[];
}

export const CardListRows = ({ rows }: CardListRowsProp) => {
  return (
    <dl className="mtfh-card-list-rows">
      {rows.map((row: CardListRow, index) => (
        <div key={index} className="mtfh-card-list-rows__row">
          <dt className="mtfh-card-list-rows__label">{row.label}:</dt>
          <dd className="mtfh-card-list-rows__value">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
};

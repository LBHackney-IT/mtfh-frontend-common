import "./styles.scss";
export type CardRow = {
    label: string;
    value: string;
};
export interface CardRowsProp {
    rows: CardRow[];
}
export declare const CardRows: ({ rows }: CardRowsProp) => JSX.Element;
//# sourceMappingURL=card-rows.d.ts.map
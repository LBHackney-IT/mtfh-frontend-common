import "./styles.scss";
export declare type CardRow = {
    label: string;
    value: string;
};
export interface CardRowsProp {
    rows: CardRow[];
}
export declare const CardRows: ({ rows }: CardRowsProp) => JSX.Element;

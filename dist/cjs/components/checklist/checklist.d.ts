import "./styles.scss";
interface ChecklistProps {
    items: {
        label: string;
        success: boolean;
    }[];
}
export declare const Checklist: ({ items }: ChecklistProps) => JSX.Element;
export {};

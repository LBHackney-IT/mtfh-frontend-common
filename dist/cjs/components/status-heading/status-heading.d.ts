import "./styles.scss";
export declare type StatusHeadingVariant = "base" | "success" | "warning" | undefined;
interface StatusHeadingProps {
    title: string;
    variant?: StatusHeadingVariant;
}
export declare const StatusHeading: ({ title, variant }: StatusHeadingProps) => JSX.Element;
export {};

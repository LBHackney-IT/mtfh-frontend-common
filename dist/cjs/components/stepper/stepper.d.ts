import { ReactElement } from "react";
import "./styles.scss";
import { StepProps } from "./step";
export declare type StepChild = ReactElement<StepProps> | ReactElement<StepProps>[] | null;
interface StepperProps {
    title?: string;
    activeStep?: number;
    children: StepChild;
    startIndex?: number;
    [x: string]: any;
}
export declare const Stepper: ({ activeStep, title, children, startIndex, ...props }: StepperProps) => JSX.Element;
export {};

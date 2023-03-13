import { ReactNode } from "react";
export interface StepProps {
    stepIndex?: number;
    children: ReactNode;
}
export declare const Step: ({ stepIndex, children }: StepProps) => JSX.Element;

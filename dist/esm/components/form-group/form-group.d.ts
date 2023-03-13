import { ReactElement } from "react";
import type * as Polymorphic from "@radix-ui/react-polymorphic";
import "./styles.scss";
export interface FormGroupProps {
    id: string;
    label?: string;
    name?: string;
    hint?: string;
    error?: string | false;
    required?: boolean;
    children: ReactElement;
    override?: number;
}
export declare type FormGroupComponent = Polymorphic.ForwardRefComponent<"div", FormGroupProps>;
export declare const FormGroup: FormGroupComponent;

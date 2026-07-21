import type * as Polymorphic from "@radix-ui/react-polymorphic";
import "./styles.scss";
export type StatusBoxVariant = "success" | "warning" | undefined;
interface StatusBoxProps {
  title: string;
  variant?: StatusBoxVariant;
}
export type StatusBoxComponent = Polymorphic.ForwardRefComponent<"div", StatusBoxProps>;
export declare const StatusBox: StatusBoxComponent;
export {};
//# sourceMappingURL=status-box.d.ts.map

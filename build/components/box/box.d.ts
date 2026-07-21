import type * as Polymorphic from "@radix-ui/react-polymorphic";
import "./styles.scss";
export type BoxVariant = "success" | "warning" | undefined;
interface BoxProps {
  variant?: BoxVariant;
}
export type BoxComponent = Polymorphic.ForwardRefComponent<"div", BoxProps>;
export declare const Box: BoxComponent;
export {};
//# sourceMappingURL=box.d.ts.map

import type * as Polymorphic from "@radix-ui/react-polymorphic";
import "./styles.scss";
export interface ListProps {
  variant?: "base" | "bullets" | "numbers";
}
export type ListComponent = Polymorphic.ForwardRefComponent<"ul", ListProps>;
export declare const List: ListComponent;
//# sourceMappingURL=list.d.ts.map

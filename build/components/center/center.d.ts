import type * as Polymorphic from "@radix-ui/react-polymorphic";
import "./styles.scss";
export interface CenterProps {
    horizontally?: boolean;
    vertically?: boolean;
    override?: number;
}
export type CenterComponent = Polymorphic.ForwardRefComponent<"div", CenterProps>;
export declare const Center: CenterComponent;
//# sourceMappingURL=center.d.ts.map
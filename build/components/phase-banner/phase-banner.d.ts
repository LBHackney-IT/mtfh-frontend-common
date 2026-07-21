import { FC, ReactElement } from "react";
import "./phase-banner.styles.scss";
type TagColorVariants = "grey" | "blue" | "yellow" | "red" | "green";
export interface PhaseBannerProps {
  tag: string;
  children: ReactElement;
  variant?: TagColorVariants | string;
}
export declare const PhaseBanner: FC<PhaseBannerProps>;
export {};
//# sourceMappingURL=phase-banner.d.ts.map

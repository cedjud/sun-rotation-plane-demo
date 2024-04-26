import { Canvas as ThreeCanvas } from "@react-three/fiber";
import { ReactNode } from "react";

export function Canvas({ children }: { children: ReactNode }) {
  return <ThreeCanvas shadows>{children}</ThreeCanvas>;
}

import type { MetaFunction } from "@remix-run/node";

import { Canvas } from "~/components/canvas/canvas";
import { Scene } from "~/components/scene/scene";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="wrapper">
      <Canvas>
        <Scene />
      </Canvas>
    </main>
  );
}

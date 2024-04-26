import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls, ScrollControls, Scroll } from "@react-three/drei";

import { Images } from "~/components/images/images";
import { Lights } from "../lights/lights";

export function ShaderScene() {
  const { camera } = useThree();

  useEffect(() => {
    // camera.zoom = 1000;
    // camera.updateProjectionMatrix();
  }, [camera]);

  return (
    <>
      <OrbitControls />
      <ScrollControls pages={3}>
        <Scroll>
          <Images />
        </Scroll>
      </ScrollControls>

      <Lights debug={false} />
    </>
  );
}

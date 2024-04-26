import { OrbitControls, useTexture } from "@react-three/drei";
import { useControls } from "leva";

import { Debug } from "~/components/debug/debug";
import { Lights } from "../lights/lights";

export function Scene() {
  const [map, normals, height] = useTexture([
    "/lupin-field.jpg",
    "/lupin-field-normals.png",
    "/lupin-field-height.png",
  ]);

  const { debug } = useControls({
    debug: false,
  });

  return (
    <>
      {debug && <Debug />}
      <OrbitControls />
      <mesh receiveShadow>
        <planeGeometry args={[10, 7, 100, 100]} />
        <meshStandardMaterial
          map={map}
          normalMap={normals}
          displacementMap={height}
          displacementScale={0.1}
        />
      </mesh>

      <Lights debug={debug} />
    </>
  );
}

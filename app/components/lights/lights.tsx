// @ts-nocheck
import { useRef } from "react";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { useControls } from "leva";

export function Lights({ debug }: { debug: boolean }) {
  const sunGroupRef = useRef<Group>(!null);

  const {
    ambientIntensity,
    pointLightIntensity,
    pointLightColor,
    ambientLightColor,
    speed,
    radius,
    aziumth,
  } = useControls({
    speed: {
      value: 0.5,
      min: 0.1,
      max: 10,
    },
    aziumth: {
      value: 0.5,
      min: 0.1,
      max: 10,
    },
    radius: {
      value: 6,
      min: 1,
      max: 50,
    },
    ambientIntensity: {
      value: 1.15,
      min: 0,
      max: 5,
    },
    pointLightIntensity: {
      value: 50,
      min: 0,
      max: 100,
    },
    pointLightColor: "#e1e2cc",
    ambientLightColor: "#e2e1c7",
  });

  useFrame(({ clock, pointer }) => {
    if (!sunGroupRef.current) return;

    const { elapsedTime } = clock;

    let inclination = elapsedTime * speed;

    if (debug) {
      inclination = pointer.x * 10;
    }

    const posX = radius * Math.sin(inclination) * Math.cos(aziumth);
    const posY = radius * Math.sin(inclination) * Math.sin(aziumth);
    const posZ = radius * Math.cos(inclination);

    if (sunGroupRef.current) {
      sunGroupRef.current.position.x = posX;
      sunGroupRef.current.position.y = posY;
      sunGroupRef.current.position.z = posZ;
    }
  });

  return (
    <group>
      <ambientLight color={ambientLightColor} intensity={ambientIntensity} />
      <group ref={sunGroupRef}>
        <pointLight
          color={pointLightColor}
          position={[-2, 2, 0]}
          intensity={pointLightIntensity}
          castShadow
        />
        <Sphere visible={debug}>
          <meshBasicMaterial color="white" transparent opacity={0.1} />
        </Sphere>
      </group>
    </group>
  );
}

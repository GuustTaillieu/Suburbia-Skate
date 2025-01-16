import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";

export type SkateboardModelProps = {
  deckTextureUrl: string;
  deckTextureUrls: string[];
  wheelTextureUrl: string;
  wheelTextureUrls: string[];
  truckColor: string;
  boltColor: string;
  constantWheelSpin?: boolean;
  pose: "upright" | "side";
};

type GLTFResult = GLTF & {
  nodes: {
    GripTape: THREE.Mesh;
    Wheel1: THREE.Mesh;
    Wheel2: THREE.Mesh;
    Deck: THREE.Mesh;
    Wheel4: THREE.Mesh;
    Bolts: THREE.Mesh;
    Wheel3: THREE.Mesh;
    Baseplates: THREE.Mesh;
    Truck1: THREE.Mesh;
    Truck2: THREE.Mesh;
  };
};

export function SkateboardModel({
  deckTextureUrl,
  deckTextureUrls,
  wheelTextureUrl,
  wheelTextureUrls,
  truckColor,
  boltColor,
  constantWheelSpin = false,
  pose = "upright",
}: SkateboardModelProps) {
  const wheelRefs = useRef<THREE.Object3D[]>([]);

  const { nodes } = useGLTF("/skateboard.gltf") as unknown as GLTFResult;

  // WHEEL TEXTURES
  const wheelTextures = useTexture(wheelTextureUrls);
  wheelTextures.forEach((texture) => {
    texture.flipY = false;
    texture.colorSpace = THREE.SRGBColorSpace;
  });

  const wheelTextureIndex = wheelTextureUrls.findIndex(
    (url) => url === wheelTextureUrl,
  );
  const wheelTexture = wheelTextures[wheelTextureIndex];

  // DECK TEXTURES
  const deckTextures = useTexture(deckTextureUrls);
  deckTextures.forEach((texture) => {
    texture.flipY = false;
    texture.colorSpace = THREE.SRGBColorSpace;
  });

  const deckTextureIndex = deckTextureUrls.findIndex(
    (url) => url === deckTextureUrl,
  );
  const deckTexture = deckTextures[deckTextureIndex];

  // GRIP TAPES
  const gripTapeDiffuse = useTexture("/skateboard/griptape-diffuse.webp");
  const gripTapeRoughness = useTexture("/skateboard/griptape-roughness.webp");

  const metalNormal = useTexture("/skateboard/metal-normal.avif");
  metalNormal.wrapS = THREE.RepeatWrapping;
  metalNormal.wrapT = THREE.RepeatWrapping;
  metalNormal.anisotropy = 8;
  metalNormal.repeat.set(8, 8);

  // COLOR MATERIALS
  const boltMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: boltColor,
      metalness: 0.5,
      roughness: 0.3,
    });
  }, [boltColor]);

  const truckMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: truckColor,
      normalMap: metalNormal,
      normalScale: new THREE.Vector2(0.3, 0.3),
      metalness: 0.8,
      roughness: 0.25,
    });
  }, [truckColor, metalNormal]);

  // TEXTURE MATERIALS
  const gripTapeMaterial = useMemo(() => {
    const material = new THREE.MeshStandardMaterial({
      map: gripTapeDiffuse,
      bumpMap: gripTapeRoughness,
      roughnessMap: gripTapeRoughness,
      bumpScale: 3.5,
      roughness: 0.8,
      color: "#555555",
    });

    [gripTapeDiffuse, gripTapeRoughness].forEach((texture) => {
      if (texture) {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(9, 9);
        texture.needsUpdate = true;
        texture.anisotropy = 8;
      }
    });

    return material;
  }, [gripTapeDiffuse, gripTapeRoughness]);

  const deckMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      map: deckTexture,
      roughness: 0.1,
    });
  }, [deckTexture]);

  const wheelMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      map: wheelTexture,
      roughness: 0.35,
    });
  }, [wheelTexture]);

  const addToWheelRefs = (ref: THREE.Object3D) => {
    if (ref && !wheelRefs.current.includes(ref)) {
      wheelRefs.current.push(ref);
    }
  };

  useFrame(() => {
    if (!wheelRefs.current || !constantWheelSpin) return;

    wheelRefs.current.forEach((wheel) => {
      wheel.rotation.x += 0.3;
    });
  });

  useEffect(() => {
    if (!wheelRefs.current || constantWheelSpin) return;

    wheelRefs.current.forEach((wheel) => {
      gsap.to(wheel.rotation, {
        x: "-=30",
        duration: 2.5,
        ease: "circ.out",
      });
    });
  }, [constantWheelSpin, wheelTextureUrl]);

  const position = useMemo(
    () =>
      ({
        upright: {
          rotation: [0, 0, 0],
          position: [0, 0, 0],
        },
        side: {
          rotation: [0, 0, Math.PI / 2],
          position: [0, 0.295, 0],
        },
      }) as const,
    [],
  );

  return (
    <group
      dispose={null}
      rotation={position[pose].rotation}
      position={position[pose].position}
    >
      <group name="Scene">
        <mesh
          name="GripTape"
          castShadow
          receiveShadow
          geometry={nodes.GripTape.geometry}
          material={gripTapeMaterial}
          position={[0, 0.286, -0.002]}
        />
        <mesh
          ref={addToWheelRefs}
          name="Wheel1"
          castShadow
          receiveShadow
          geometry={nodes.Wheel1.geometry}
          material={wheelMaterial}
          position={[0.238, 0.086, 0.635]}
        />
        <mesh
          ref={addToWheelRefs}
          name="Wheel2"
          castShadow
          receiveShadow
          geometry={nodes.Wheel2.geometry}
          material={wheelMaterial}
          position={[-0.237, 0.086, 0.635]}
        />
        <mesh
          name="Deck"
          castShadow
          receiveShadow
          geometry={nodes.Deck.geometry}
          material={deckMaterial}
          position={[0, 0.271, -0.002]}
        />
        <mesh
          ref={addToWheelRefs}
          name="Wheel4"
          castShadow
          receiveShadow
          geometry={nodes.Wheel4.geometry}
          material={wheelMaterial}
          position={[-0.238, 0.086, -0.635]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="Bolts"
          castShadow
          receiveShadow
          geometry={nodes.Bolts.geometry}
          material={boltMaterial}
          position={[0, 0.198, 0]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          ref={addToWheelRefs}
          name="Wheel3"
          castShadow
          receiveShadow
          geometry={nodes.Wheel3.geometry}
          material={wheelMaterial}
          position={[0.237, 0.086, -0.635]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="Baseplates"
          castShadow
          receiveShadow
          geometry={nodes.Baseplates.geometry}
          material={truckMaterial}
          position={[0, 0.211, 0]}
        />
        <mesh
          name="Truck1"
          castShadow
          receiveShadow
          geometry={nodes.Truck1.geometry}
          material={truckMaterial}
          position={[0, 0.101, -0.617]}
        />
        <mesh
          name="Truck2"
          castShadow
          receiveShadow
          geometry={nodes.Truck2.geometry}
          material={truckMaterial}
          position={[0, 0.101, 0.617]}
          rotation={[Math.PI, 0, Math.PI]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/skateboard.gltf");

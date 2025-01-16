"use client";

import * as THREE from "three";
import {
  CameraControls,
  Environment,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { useCustomizerControls } from "./build-context";
import { asImageSrc } from "@prismicio/client";
import {
  DEFAULT_BOLT_COLOR,
  DEFAULT_DECK_TEXTURE,
  DEFAULT_TRUCK_COLOR,
  ENVIRONMENT_COLOR,
} from "@/app/lib/constants";
import { SkateboardModel } from "@/app/components/SkateboardModel";

type Props = {
  wheelTextureUrls: string[];
  deckTextureUrls: string[];
};

export function Preview({ wheelTextureUrls, deckTextureUrls }: Props) {
  const { selectedWheel, selectedBolt, selectedDeck, selectedTruck } =
    useCustomizerControls();

  const cameraControls = useRef<CameraControls>(null);
  const floorRef = useRef<THREE.Mesh>(null);

  function addCameraControls(ref: CameraControls) {
    cameraControls.current = ref;
  }

  const wheelTextureUrl =
    asImageSrc(selectedWheel?.texture) ?? DEFAULT_DECK_TEXTURE;
  const deckTextureUrl =
    asImageSrc(selectedDeck?.texture) ?? DEFAULT_DECK_TEXTURE;
  const truckColor = selectedTruck?.color ?? DEFAULT_TRUCK_COLOR;
  const boltColor = selectedBolt?.color ?? DEFAULT_BOLT_COLOR;

  useEffect(() => {
    setCameraControls(
      new THREE.Vector3(0, 0.3, 0),
      new THREE.Vector3(1.5, 0.8, 0),
    );
  }, [selectedDeck]);

  useEffect(() => {
    setCameraControls(
      new THREE.Vector3(-0.12, 0.29, 0.57),
      new THREE.Vector3(0.1, 0.25, 0.9),
    );
  }, [selectedTruck]);

  useEffect(() => {
    setCameraControls(
      new THREE.Vector3(-0.08, 0.54, 0.64),
      new THREE.Vector3(0.09, 1, 0.9),
    );
  }, [selectedWheel]);

  useEffect(() => {
    setCameraControls(
      new THREE.Vector3(-0.25, 0.3, 0.62),
      new THREE.Vector3(-0.5, 0.35, 0.8),
    );
  }, [selectedBolt]);

  function setCameraControls(target: THREE.Vector3, pos: THREE.Vector3) {
    if (!cameraControls.current) return;

    cameraControls.current.setTarget(target.x, target.y, target.z, true);
    cameraControls.current.setPosition(pos.x, pos.y, pos.z, true);
  }

  function onCameraControlStart() {
    if (
      !cameraControls.current ||
      !floorRef.current ||
      cameraControls.current.colliderMeshes.length > 0
    )
      return;

    cameraControls.current.colliderMeshes = [floorRef.current];
    setCameraControls(
      new THREE.Vector3(-0.66, 0.6, 0),
      new THREE.Vector3(1, 1, 1.9),
    );
  }

  return (
    <Canvas shadows>
      <Suspense fallback={null}>
        <Environment
          files={"/hdr/warehouse-512.hdr"}
          environmentIntensity={0.6}
        />

        <directionalLight
          castShadow
          lookAt={[0, 0, 0]}
          position={[1, 1, 1]}
          intensity={1.6}
        />
        <fog attach="fog" args={[ENVIRONMENT_COLOR, 3, 10]} />
        <color attach="background" args={[ENVIRONMENT_COLOR]} />

        <SkateboardModel
          wheelTextureUrls={wheelTextureUrls}
          deckTextureUrls={deckTextureUrls}
          wheelTextureUrl={wheelTextureUrl}
          deckTextureUrl={deckTextureUrl}
          truckColor={truckColor}
          boltColor={boltColor}
          pose="side"
        />
        <StageFloor />
        <mesh ref={floorRef} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[10, 10]} />
          <meshBasicMaterial visible={false} />
        </mesh>

        <CameraControls
          ref={addCameraControls}
          minDistance={0.2}
          maxDistance={4}
          onStart={onCameraControlStart}
        />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

function StageFloor() {
  const normalMap = useTexture("/concrete-normal.avif");
  normalMap.wrapS = THREE.RepeatWrapping;
  normalMap.wrapT = THREE.RepeatWrapping;
  normalMap.repeat.set(30, 30);
  normalMap.anisotropy = 8;

  const material = new THREE.MeshStandardMaterial({
    color: ENVIRONMENT_COLOR,
    normalMap,
    roughness: 1,
  });

  return (
    <mesh
      castShadow
      receiveShadow
      position={[0, -0.005, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      material={material}
    >
      <circleGeometry args={[20, 32]} />
    </mesh>
  );
}

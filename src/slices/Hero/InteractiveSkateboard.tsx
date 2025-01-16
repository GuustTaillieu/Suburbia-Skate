"use client";

import { ContactShadows, Environment, Html } from "@react-three/drei";
import { Canvas, ThreeEvent, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { ReactNode, Suspense } from "react";
import * as THREE from "three";

import {
  SkateboardModel,
  SkateboardModelProps,
} from "@/app/components/SkateboardModel";
import gsap from "gsap";
import { HotSpot } from "@/app/components/HotSpot";
import { INITIAL_CAMERA_POSITION } from "@/app/lib/constants";
import { WavyPaths } from "@/app/components/WavyPaths";

type Props = SkateboardModelProps & {};

export function InteractiveSkateboard(props: Props) {
  return (
    <div className="absolute inset-0 z-10 items-center justify-center">
      <Canvas
        className="w-full min-h-[60rem]"
        camera={{ position: INITIAL_CAMERA_POSITION, fov: 55 }}
      >
        <Suspense>
          <Scene>
            <SkateboardModel {...props} />
          </Scene>
        </Suspense>
      </Canvas>
    </div>
  );
}

type SceneProps = {
  children?: ReactNode;
};

function Scene({ children }: SceneProps) {
  const containterRef = useRef<THREE.Group>(null);
  const originCenterRef = useRef<THREE.Group>(null);
  const { camera } = useThree();

  useEffect(() => {
    camera.lookAt(new THREE.Vector3(-0.2, 0.15, 0));
    setZoom();
    window.addEventListener("resize", setZoom);

    function setZoom() {
      const scale = Math.max(Math.min(1000 / window.innerWidth, 2.2), 1);

      camera.position.x = INITIAL_CAMERA_POSITION[0] * scale;
      camera.position.y = INITIAL_CAMERA_POSITION[1] * scale;
      camera.position.z = INITIAL_CAMERA_POSITION[1] * scale;
    }

    return () => {
      window.removeEventListener("resize", setZoom);
    };
  }, [camera]);

  useEffect(() => {
    if (!containterRef.current || !originCenterRef.current) return;

    gsap.to(containterRef.current.position, {
      x: 0.2,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(originCenterRef.current.rotation, {
      y: Math.PI / 64,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, [containterRef, originCenterRef]);

  const [showHotSpots, setShowHotSpots] = useState({
    ollie: true,
    kickflip: true,
    frontside: true,
  });
  const [isAnimating, setIsAnimating] = useState(false);

  function onClick(e: ThreeEvent<MouseEvent>) {
    e.stopPropagation();

    const board = containterRef.current;
    const centeredBoard = originCenterRef.current;
    if (!board || !centeredBoard || isAnimating) return;

    const { name } = e.object;

    setShowHotSpots((current) => ({
      ...current,
      [name]: false,
    }));
    setIsAnimating(true);

    switch (name) {
      case "ollie":
        ollieBoard(board);
        break;
      case "kickflip":
        kickflipBoard(board);
        break;
      case "frontside":
        frontside(board, centeredBoard);
        break;
    }
  }

  function ollieBoard(board: THREE.Group) {
    jumpBoard(board);
    gsap
      .timeline({ onComplete: () => setIsAnimating(false) })
      .to(board.rotation, {
        x: -0.6,
        duration: 0.26,
        ease: "none",
      })
      .to(board.rotation, {
        x: 0.4,
        duration: 0.82,
        ease: "power2.in",
      })
      .to(board.rotation, {
        x: 0,
        duration: 0.12,
        ease: "none",
      });
  }

  function kickflipBoard(board: THREE.Group) {
    jumpBoard(board);
    gsap
      .timeline({ onComplete: () => setIsAnimating(false) })
      .to(board.rotation, {
        x: -0.6,
        duration: 0.26,
        ease: "none",
      })
      .to(board.rotation, {
        x: 0.4,
        duration: 0.82,
        ease: "power2.in",
      })
      .to(
        board.rotation,
        {
          z: `+=${Math.PI * 2}`,
          duration: 0.78,
          ease: "none",
        },
        0.2,
      )
      .to(board.rotation, {
        x: 0,
        duration: 0.12,
        ease: "none",
      });
  }

  function frontside(board: THREE.Group, centeredBoard: THREE.Group) {
    jumpBoard(board);
    gsap
      .timeline({ onComplete: () => setIsAnimating(false) })
      .to(board.rotation, {
        x: -0.6,
        duration: 0.26,
        ease: "none",
      })
      .to(board.rotation, {
        x: 0.4,
        duration: 0.82,
        ease: "power2.in",
      })
      .to(
        centeredBoard.rotation,
        {
          y: `+=${Math.PI * 2}`,
          duration: 0.68,
          ease: "none",
        },
        0.3,
      )
      .to(board.rotation, {
        x: 0,
        duration: 0.12,
        ease: "none",
      });
  }

  function jumpBoard(board: THREE.Group) {
    gsap
      .timeline()
      .to(board.position, {
        y: 0.8,
        duration: 0.51,
        ease: "power2.out",
        delay: 0.26,
      })
      .to(board.position, {
        y: 0,
        duration: 0.43,
        ease: "power2.in",
      });
  }

  return (
    <group>
      <Environment files={"/hdr/warehouse-256.hdr"} />
      <group ref={originCenterRef}>
        <group ref={containterRef} position={[0, 0.086, -0.635]}>
          <group position={[0, -0.086, 0.635]}>
            {children}

            <HotSpot
              isVisible={!isAnimating && showHotSpots.frontside}
              position={[0, 0.38, 1]}
              color="#B8FC39"
            />
            <mesh position={[0, 0.27, 0.9]} name="frontside" onClick={onClick}>
              <boxGeometry args={[0.6, 0.2, 0.58]} />
              <meshStandardMaterial visible={false} />
            </mesh>

            <HotSpot
              isVisible={!isAnimating && showHotSpots.kickflip}
              position={[0, 0.33, 0]}
              color="#ff7347"
            />
            <mesh position={[0, 0.27, 0]} name="kickflip" onClick={onClick}>
              <boxGeometry args={[0.6, 0.1, 1.2]} />
              <meshStandardMaterial visible={false} />
            </mesh>

            <HotSpot
              isVisible={!isAnimating && showHotSpots.ollie}
              position={[0, 0.35, -0.9]}
              color="#4876ff"
            />
            <mesh position={[0, 0.27, -0.9]} name="ollie" onClick={onClick}>
              <boxGeometry args={[0.6, 0.2, 0.58]} />
              <meshStandardMaterial visible={false} />
            </mesh>
          </group>
        </group>
      </group>
      <ContactShadows opacity={0.6} position={[0, -0.08, 0]} />

      <group
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        position={[0, -0.09, -0.5]}
        scale={[0.2, 0.2, 0.2]}
      >
        <Html
          transform
          zIndexRange={[1, 0]}
          occlude="blending"
          wrapperClass="pointer-events-none"
        >
          <WavyPaths />
        </Html>
      </group>
    </group>
  );
}

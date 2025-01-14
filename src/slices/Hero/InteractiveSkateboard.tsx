"use client";

import {
  SkateboardModel,
  SkateboardModelProps,
} from "@/app/components/SkateboardModel";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactNode, Suspense } from "react";

type Props = SkateboardModelProps & {};

export function InteractiveSkateboard(props: Props) {
  return (
    <div className="absolute inset-0 z-10 items-center justify-center">
      <Canvas className="w-full min-h-[60rem]">
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
  return (
    <group>
      <OrbitControls />
      <Environment files={"/hdr/warehouse-256.hdr"} />
      {children}
      <ContactShadows opacity={0.6} position={[0, -0.08, 0]} />
    </group>
  );
}

"use client";

import Silk from "./rb";

export default function SilkBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Silk
        speed={15}
        scale={1}
        color="#3434a1"
        noiseIntensity={5.2}
        rotation={1.79}
      />
    </div>
  );
}

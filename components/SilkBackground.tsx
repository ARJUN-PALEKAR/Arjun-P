"use client";

import Silk from "./rb";

export default function SilkBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Silk
        speed={20}
        scale={1.6}
        color="#FFFFFF"
        noiseIntensity={10}
        rotation={4.5}
      />
    </div>
  );
}

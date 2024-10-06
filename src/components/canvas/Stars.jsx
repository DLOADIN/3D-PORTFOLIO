import React, { useState, useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import PropTypes from 'prop-types';

const Stars = React.memo(({ color = '#f272c8', size = 0.002, count = 5000, radius = 1.2 }) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(count * 3), { radius }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
});

Stars.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  count: PropTypes.number,
  radius: PropTypes.number,
};

const StarsCanvas = ({ className = 'w-full h-auto absolute inset-0 z-[-1]' }) => {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

StarsCanvas.propTypes = {
  className: PropTypes.string,
};

export default StarsCanvas;

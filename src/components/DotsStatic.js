import React, { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';

function DotsStatic({ isDarkMode }) {
    const dotColor = isDarkMode ? "#F5F5F5" : "#191919"; // Flip the colors
    const ref = useRef() // Reference to our InstancedMesh

    const { positions } = useMemo(() => {
      // Precompute randomized initial positions (array of Vector3)
      const positions = [...Array(10000)].map((_, i) => {
        const position = new THREE.Vector3()
        // Place in a grid
        position.x = (i % 100) - 50
        position.y = Math.floor(i / 100) - 50
  
        // Offset every other column (hexagonal pattern)
        position.y += (i % 2) * 0.5
  
        // Add some noise
        position.x += Math.random() * 0.3
        position.y += Math.random() * 0.3
        return position
      });

      return { positions }
    }, []);

    // Set initial positions of dots when the component mounts
    useEffect(() => {
      if (ref.current) {
        positions.forEach((position, i) => {
          const transform = new THREE.Matrix4()
          transform.setPosition(position);
          ref.current.setMatrixAt(i, transform);
        });
        ref.current.instanceMatrix.needsUpdate = true;
      }
    }, [positions]);

    return (
        <instancedMesh ref={ref} args={[null, null, 10000]}>
            <circleGeometry attach="geometry" args={[0.05]} />
            <meshBasicMaterial attach="material" color={dotColor} transparent={true} />
        </instancedMesh>
    );
}

export default DotsStatic;

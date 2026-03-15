import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Rocket = (props) => {
    const { scene } = useGLTF("/models/rocket_take_off.glb");
    const rocketRef = useRef();

    useFrame((state) => {
        if (!rocketRef.current) return;

        const t = state.clock.getElapsedTime();

        // Float: smooth sine-wave bobbing up and down
        rocketRef.current.position.y = -2.5 + Math.sin(t * 1.2) * 0.18;

        // Spin: slow continuous rotation around Y axis
        rocketRef.current.rotation.y = t * 0.4;

        // Pulse: subtle scale breathing to mimic thruster activity
        const pulse = 1 + Math.sin(t * 3.5) * 0.018;
        rocketRef.current.scale.set(0.8 * pulse, 0.8 * pulse, 0.8 * pulse);
    });

    return (
        <primitive
            ref={rocketRef}
            object={scene}
            scale={0.8}
            position={[0, -2.5, 0]}
            {...props}
        />
    );
};

export default Rocket;
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Rocket = ({ hoveredId, ...props }) => {
    const { scene } = useGLTF("/models/rocket_take_off.glb");
    const rocketRef = useRef();

    useFrame((state) => {
        if (!rocketRef.current) return;

        const t = state.clock.getElapsedTime();

        if (!hoveredId) {
            // IDLE — barely alive, just a whisper of movement
            rocketRef.current.position.y = -2.5 + Math.sin(t * 0.4) * 0.04;
            rocketRef.current.rotation.y += 0.001;
            rocketRef.current.rotation.z = Math.sin(t * 0.3) * 0.01;
            rocketRef.current.scale.set(0.8, 0.8, 0.8);

        } else if (hoveredId === 3) {
            // ACHIEVEMENT 1 — slow, majestic orbit. Like a rocket in deep space.
            rocketRef.current.position.y = -2.5 + Math.sin(t * 0.6) * 0.3;
            rocketRef.current.rotation.y = t * 0.25;
            rocketRef.current.rotation.z = Math.sin(t * 0.5) * 0.08;
            const pulse = 1 + Math.sin(t * 1.2) * 0.015;
            rocketRef.current.scale.set(0.8 * pulse, 0.8 * pulse, 0.8 * pulse);

        } else if (hoveredId === 1) {
            // ACHIEVEMENT 2 — fast spin + rapid bounce. Competitive energy.
            rocketRef.current.position.y = -2.5 + Math.sin(t * 4.5) * 0.22;
            rocketRef.current.rotation.y = t * 2.8;
            rocketRef.current.rotation.z = Math.sin(t * 5) * 0.06;
            const pulse = 1 + Math.sin(t * 7) * 0.025;
            rocketRef.current.scale.set(0.8 * pulse, 0.8 * pulse, 0.8 * pulse);

        } else if (hoveredId === 2) {
            // ACHIEVEMENT 3 — playful wobble/tilt, like a prototype finding its footing.
            rocketRef.current.position.y = -2.5 + Math.sin(t * 1.8) * 0.14;
            rocketRef.current.rotation.y = t * 0.5;
            rocketRef.current.rotation.z = Math.sin(t * 2.2) * 0.22;
            rocketRef.current.rotation.x = Math.cos(t * 1.6) * 0.12;
            rocketRef.current.scale.set(0.8, 0.8, 0.8);
        }
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
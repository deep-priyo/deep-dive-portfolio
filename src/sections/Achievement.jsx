import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import Rocket from "../components/Rocket.jsx";

const achievements = [
    {
        id: 1,
        title: "Finalist — Meta Pragati AI for Impact Hackathon",
        org: "Meta × The/Nudge Institute",
        date: "Jul 2025",
        desc: "Built an AI solution for real-world social impact and was selected among the national finalists."
    },
    {
        id: 2,
        title: "Runner-Up — NLP HackathonX",
        org: "Genpact × IIT Kharagpur (Kshitij)",
        date: "Feb 2025",
        desc: "Developed an NLP based system and secured runner-up position in the national hackathon."
    },
    {
        id: 3,
        title: "Top 15 — Re-Imagine Hackathon",
        org: "Sheriyans Coding School",
        date: "Sep 2024",
        desc: "Ranked among the Top 15 teams across India for building a competitive frontend prototype."
    }
];

const Achievement = () => {
    return ( <section className="c-space my-24"> <div className="w-full">

        ```
        {/* LEFT ALIGNED HEADING */}
        <h3 className="head-text mb-10">Achievements</h3>

        <div className="grid lg:grid-cols-[420px_1fr] gap-14">

            {/* TALL ROCKET CONTAINER */}
            <div className="h-[620px] w-full bg-black border border-neutral-800 rounded-2xl">

                <Canvas>
                    <ambientLight intensity={2}/>
                    <spotLight position={[10,10,10]} angle={0.15} penumbra={1}/>
                    <directionalLight position={[10,10,10]} intensity={1}/>
                    <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2}/>

                    <Suspense fallback={<CanvasLoader/>}>
                        <Rocket/>
                    </Suspense>
                </Canvas>

            </div>

            {/* ACHIEVEMENT LIST */}
            <div className="flex flex-col gap-6">

                {achievements.map((item) => (
                    <div
                        key={item.id}
                        className="
            bg-[#0b0b0b]
            border border-neutral-800
            rounded-xl
            p-6
            hover:border-neutral-600
            hover:bg-[#111]
            transition-all duration-300
            "
                    >

                        <div className="flex justify-between items-start mb-2">
                            <h4 className="text-white font-semibold text-lg">
                                {item.title}
                            </h4>

                            <span className="text-xs text-neutral-500">
                {item.date}
              </span>
                        </div>

                        <p className="text-sm text-neutral-400 mb-2">
                            {item.org}
                        </p>

                        <p className="text-sm text-neutral-300 leading-relaxed">
                            {item.desc}
                        </p>

                    </div>
                ))}

            </div>

        </div>
    </div>
    </section>


);
};

export default Achievement;

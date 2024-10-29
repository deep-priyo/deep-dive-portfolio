import Globe from "react-globe.gl";


const About = () => {
    return (
        <section className="c-space my-20 ">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6  md:grids-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3 ">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className= "w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Hi, I'm Priyadeep</p>
                            <p className="grid-subtext">With 3 years of focused learning, I've sharpened my frontend and backend skills, pushing myself daily to build seamless, impactful web experiences.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:col-span-3 ">
                    <div className="grid-container ">
                        <img src="/assets/grid2.png" className="w-full sm:h-[276px] h-fit object-contain" alt="grid-2"/>

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext ">II specialize in frontend technologies like React and Next.js, backend frameworks like Flask and Django, and databases such as SQL.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">\
                <div className="grid-container ">
                    <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                        <Globe height={326} width={326} backgroundColor="rgba(0,0,0,0)" backgroundImageOpacity={0.5} showAtmosphere showGraticules
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"/>
                    </div>
                    <div>
                        <p className="grid-headtext">I'm open to remote work and relocation.</p>
                        <p className="grid-subtext">I’m experienced in working remotely across time zones and am open to relocation, bringing flexibility and adaptability to any team.</p>
                    </div>

                </div>
                </div>
            </div>
        </section>
    )
}
export default About

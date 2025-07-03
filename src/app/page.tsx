import Lanyard from "@/components/Lanyard/Lanyard";
import Image from "next/image";
import RotatingText from "@/components/RotatingText/RotatingText";
import SplitText from "@/components/SplitText/SplitText";
import BlurText from "@/components/BlurText/BlurText";
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0A1021]">
      <div className="container  mx-auto h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6 ">
            <div className="flex items-center h-full">
              <div className="flex flex-col gap-6">
                <AnimatedContent
                  distance={150}
                  direction="horizontal"
                  reverse={false}
                  duration={1.2}
                  ease="bounce.out"
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                >
                  <div className="flex items-center gap-2">
                    <h1 className="text-2x1 tex-white font-bold ">
                      I am Ready For Job
                    </h1>
                    <RotatingText
                      texts={[
                        "Web Design",
                        "Web Development",
                        "Web Programing",
                        "AI Developer",
                      ]}
                      mainClassName="px-2 sm:px-2 md:px-3 bg-[#C3FF00] text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg
              justify-center rounded-lg text-2x1 font-bold inline-flex transition-all"
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{
                        type: "spring",
                        damping: 30,
                        stiffness: 400,
                      }}
                      rotationInterval={2000}
                    />
                  </div>
                </AnimatedContent>
                <div></div>

                <div className="flex flex-col items-start">
                  <SplitText
                    text="Hello, I am Dimas Dwi A.P"
                    className="text-6xl font-semibold text-start "
                    delay={50}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                  />

                  <div className="flex flex-col items-start">
                    <SplitText
                      text="Full Stack Developer"
                      className="text-6xl font-semibold text-start text-[#C3FF00]"
                      delay={75}
                      duration={0.6}
                      ease="power3.out"
                      splitType="chars"
                      from={{ opacity: 0, y: 40 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.1}
                      rootMargin="-100px"
                      textAlign="center"
                    />
                  </div>
                </div>

                <BlurText
                  text="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-xl mb-8"
                />
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
    </div>
  );
}

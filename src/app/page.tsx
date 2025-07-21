import Lanyard from "@/components/Lanyard/Lanyard";
import Image from "next/image";
import RotatingText from "@/components/RotatingText/RotatingText";
import SplitText from "@/components/SplitText/SplitText";
import BlurText from "@/components/BlurText/BlurText";
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";
import Squares from "@/components/Squares/Squares";
import CircularText from "@/components/CircularText/CircularText";
import GradientText from "@/components/GradientText/GradientText";
import ScrollVelocity from "@/components/ScrollVelocity/ScrollVelocity";
import Threads from "@/components/Threads/Threads";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
export default function Home() {
  return (
    // Main container for the entire page
    <div className="min-h-screen overflow-x-hidden bg-[#0A1021]">
      <section className="relative h-screen overflow-hidden">
        {/* Background Animation: Contained within the hero section */}
        <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
          <Squares
            speed={0.5}
            squareSize={30}
            direction="diagonal"
            borderColor="#8f8f8f"
            hoverFillColor="#C3FF00"
          />
        </div>

        {/* Hero Content: Positioned relative to ensure it's on top of the background */}
        <div className="container mx-auto h-full relative z-10">
          <div className="grid grid-cols-12 h-full">
            {/* Left Column */}
            <div className="col-span-12 md:col-span-6 flex items-center">
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
                  <div className="flex items-center gap-3 relative">
                    {/* Corrected typo: tex-white -> text-white, text-3x1 -> text-3xl */}
                    <h1 className="text-3xl text-white font-bold">
                      I am Ready For Job
                    </h1>
                    <RotatingText
                      texts={[
                        "Web Design",
                        "Web Development",
                        "Web Programing",
                        "AI Developer",
                      ]}
                      // Corrected typo: text-2x1 -> text-2xl. Removed duplicate justify-center.
                      mainClassName="px-2 sm:px-2 md:px-3 bg-[#C3FF00] text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
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

                <div className="flex flex-col items-start relative">
                  <SplitText
                    text="Hello, I am Dimas Dwi A.P"
                    className="text-6xl font-semibold text-start text-white"
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

                <BlurText
                  text="Saya adalah seorang Frontend Developer yang bersekolah di SMK TARUNA BAKTI yang memiliki ketertarikan besar dalam dunia pengembangan web modern. Saya memiliki pemahaman yang kuat dalam membangun antarmuka pengguna yang menarik, responsif, dan fungsional menggunakan React, Next.js, serta teknologi visual seperti React Three Fiber untuk menciptakan pengalaman interaktif berbasis 3D di web."
                  delay={75}
                  animateBy="words"
                  direction="top"
                  className="text-xl mb-8 text-white" // Added text-white for visibility
                />
                <button className="group w-fit px-6 py-3 bg-black border border-[#2f3b59] rounded-lg shadow-sm hover:shadow-md transition-all duration-200 relative">
                  <GradientText>HIRE ME</GradientText>
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-6 relative h-full hidden md:flex items-start justify-end">
              <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
              <CircularText
                text="Front-end*BITS*Developer*"
                onHover="speedUp"
                spinDuration={20}
                className="absolute top-30 right-30"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <ScrollVelocity
          texts={["Taruna Bakti", "Front-end Developer"]}
          className="custom-scroll-text"
        />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedContent
            distance={80}
            direction="vertical"
            duration={1}
            threshold={0.2}
            animateOpacity
          >
            <div>
              <SplitText
                text="Tentang Saya"
                className="text-4xl font-bold text-[#C3FF00] mb-4"
                delay={30}
                duration={0.5}
                splitType="words"
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
              />
              <p className="text-lg text-white mb-6">
                Saya Dimas Dwi A.P, seorang pengembang web yang antusias dan
                selalu ingin berkembang. Saya percaya bahwa teknologi adalah
                alat untuk menciptakan solusi nyata dan berdampak. Saya senang
                bekerja dalam tim, terbuka pada tantangan baru, dan selalu
                berusaha memberikan hasil terbaik.
              </p>
              <div className="flex flex-col gap-2">
                <span className="inline-flex items-center gap-2 text-[#C3FF00] font-semibold">
                  <svg width="20" height="20" fill="none">
                    <circle cx="10" cy="10" r="10" fill="#C3FF00" />
                  </svg>
                  Selalu ingin belajar hal baru
                </span>
                <span className="inline-flex items-center gap-2 text-[#C3FF00] font-semibold">
                  <svg width="20" height="20" fill="none">
                    <circle cx="10" cy="10" r="10" fill="#C3FF00" />
                  </svg>
                  Kolaboratif & Adaptif
                </span>
                <span className="inline-flex items-center gap-2 text-[#C3FF00] font-semibold">
                  <svg width="20" height="20" fill="none">
                    <circle cx="10" cy="10" r="10" fill="#C3FF00" />
                  </svg>
                  Konsisten & Bertanggung jawab
                </span>
              </div>
            </div>
          </AnimatedContent>
          <AnimatedContent
            distance={80}
            direction="horizontal"
            reverse
            duration={1}
            threshold={0.2}
            
          >
            <div className="flex justify-center ">
              <ProfileCard
                name="Dimas Dwi A.P"
                title="Software Engineer"
                handle="Diams"
                status="Online"
                contactText="Contact Me"
                avatarUrl="images/dimas.jpg"
                showUserInfo={true}
                enableTilt={true}
              />
            </div>
          </AnimatedContent>
        </div>
      </section>

      <section className="py-24 bg-[#10172b]">
        <section className="py-24 bg-[#10172b]">
          <div className="container mx-auto">
            <SplitText
              text="Keahlian"
              className="text-4xl font-bold text-[#C3FF00] mb-10 text-center"
              delay={30}
              duration={0.5}
              splitType="words"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {[
                {
                  name: "React",
                  color: "#61dafb",
                  progress: "90%",
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="20" fill="#181e2e" />
                      <g>
                        <ellipse
                          rx="8"
                          ry="20"
                          transform="matrix(.87 .5 -.5 .87 20 20)"
                          stroke="#61dafb"
                          strokeWidth="2"
                        />
                        <ellipse
                          rx="8"
                          ry="20"
                          transform="matrix(.87 -.5 .5 .87 20 20)"
                          stroke="#61dafb"
                          strokeWidth="2"
                        />
                        <ellipse
                          rx="8"
                          ry="20"
                          transform="matrix(0 1 1 0 20 20)"
                          stroke="#61dafb"
                          strokeWidth="2"
                        />
                        <circle cx="20" cy="20" r="3" fill="#61dafb" />
                      </g>
                    </svg>
                  ),
                },
                {
                  name: "Next.js",
                  color: "#ffffff",
                  progress: "85%",
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="20" fill="#181e2e" />
                      <text
                        x="10"
                        y="28"
                        fontSize="18"
                        fill="#ffffff"
                        fontFamily="Arial"
                      >
                        N
                      </text>
                    </svg>
                  ),
                },
                {
                  name: "TailwindCSS",
                  color: "#38bdf8",
                  progress: "80%",
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="20" fill="#181e2e" />
                      <path
                        d="M13 23c1.5-3 3.5-4.5 6-4.5s4.5 1.5 6 4.5c-1.5 3-3.5 4.5-6 4.5s-4.5-1.5-6-4.5z"
                        fill="#38bdf8"
                      />
                      <path
                        d="M19 17c1-2 2.5-3 4-3s3 1 4 3c-1 2-2.5 3-4 3s-3-1-4-3z"
                        fill="#38bdf8"
                      />
                    </svg>
                  ),
                },
                {
                  name: "Three.js",
                  color: "#ffffff",
                  progress: "70%",
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="20" fill="#181e2e" />
                      <polygon points="20,10 30,30 10,30" fill="#ffffff" />
                      <polygon points="20,14 27,28 13,28" fill="#000000" />
                    </svg>
                  ),
                },
                {
                  name: "HTML",
                  color: "#e34c26",
                  progress: "95%",
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="20" fill="#181e2e" />
                      <text
                        x="8"
                        y="28"
                        fontSize="18"
                        fill="#e34c26"
                        fontFamily="Arial"
                      >
                        HTML
                      </text>
                    </svg>
                  ),
                },
                {
                  name: "JavaScript",
                  color: "#f7df1e",
                  progress: "90%",
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="20" fill="#181e2e" />
                      <text
                        x="2"
                        y="28"
                        fontSize="16"
                        fill="#f7df1e"
                        fontFamily="Arial"
                      >
                        JS
                      </text>
                    </svg>
                  ),
                },
                {
                  name: "Java",
                  color: "#f89820",
                  progress: "75%",
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="20" fill="#181e2e" />
                      <text
                        x="7"
                        y="28"
                        fontSize="18"
                        fill="#f89820"
                        fontFamily="Arial"
                      >
                        Java
                      </text>
                    </svg>
                  ),
                },
                {
                  name: "PHP / Laravel",
                  color: "#ff2d20",
                  progress: "80%",
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="20" fill="#181e2e" />
                      <text
                        x="2"
                        y="28"
                        fontSize="14"
                        fill="#ff2d20"
                        fontFamily="Arial"
                      >
                        Laravel
                      </text>
                    </svg>
                  ),
                },
              ].map((skill, index) => (
                <AnimatedContent
                  key={skill.name}
                  distance={60}
                  direction="vertical"
                  duration={0.7 + index * 0.1}
                  threshold={0.1}
                >
                  <div className="group flex flex-col items-center bg-[#181e2e] rounded-xl p-6 border border-[#2f3b59] hover:scale-105 transition-transform shadow-md hover:shadow-[#C3FF00]/30">
                    <span
                      className="text-5xl mb-2"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </span>
                    <span className="text-white font-semibold text-lg">
                      {skill.name}
                    </span>
                    <div className="w-full h-2 bg-[#2f3b59] rounded mt-3">
                      <div
                        className="h-2 rounded"
                        style={{
                          width: skill.progress,
                          backgroundColor: skill.color,
                        }}
                      />
                    </div>
                  </div>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </section>
      </section>

      <section className="py-24">
        <div className="container mx-auto">
          <SplitText
            text="Proyek Unggulan"
            className="text-4xl font-bold text-[#C3FF00] mb-10 text-center"
            delay={30}
            duration={0.5}
            splitType="words"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
          />
          <div className="flex gap-8 overflow-x-auto pb-4">
            <AnimatedContent
              distance={60}
              direction="horizontal"
              duration={0.7}
              threshold={0.1}
            >
              <div className="min-w-[320px] bg-[#181e2e] rounded-xl border border-[#2f3b59] shadow-md hover:shadow-[#C3FF00]/30 transition-shadow flex flex-col">
                <Image
                  src="/project1-thumb.jpg"
                  alt="Project 1"
                  width={320}
                  height={180}
                  className="rounded-t-xl object-cover"
                />
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Portofolio 3D Interactive
                  </h3>
                  <p className="text-white/80 mb-3 text-sm">
                    Website portofolio dengan animasi 3D interaktif menggunakan
                    React Three Fiber dan Next.js.
                  </p>
                  <div className="flex gap-2 mb-4">
                    <span className="bg-[#C3FF00] text-black px-2 py-1 rounded text-xs font-semibold">
                      Next.js
                    </span>
                    <span className="bg-[#181e2e] border border-[#C3FF00] text-[#C3FF00] px-2 py-1 rounded text-xs font-semibold">
                      Three.js
                    </span>
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block px-4 py-2 bg-[#C3FF00] text-black font-bold rounded hover:bg-[#b3e600] transition"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </AnimatedContent>
            <AnimatedContent
              distance={60}
              direction="horizontal"
              duration={0.8}
              threshold={0.1}
            >
              <div className="min-w-[320px] bg-[#181e2e] rounded-xl border border-[#2f3b59] shadow-md hover:shadow-[#C3FF00]/30 transition-shadow flex flex-col">
                <Image
                  src="/project2-thumb.jpg"
                  alt="Project 2"
                  width={320}
                  height={180}
                  className="rounded-t-xl object-cover"
                />
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Sistem Absensi Siswa
                  </h3>
                  <p className="text-white/80 mb-3 text-sm">
                    Aplikasi absensi berbasis web dengan dashboard realtime dan
                    autentikasi.
                  </p>
                  <div className="flex gap-2 mb-4">
                    <span className="bg-[#C3FF00] text-black px-2 py-1 rounded text-xs font-semibold">
                      React
                    </span>
                    <span className="bg-[#181e2e] border border-[#C3FF00] text-[#C3FF00] px-2 py-1 rounded text-xs font-semibold">
                      Firebase
                    </span>
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block px-4 py-2 bg-[#C3FF00] text-black font-bold rounded hover:bg-[#b3e600] transition"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </AnimatedContent>
            <AnimatedContent
              distance={60}
              direction="horizontal"
              duration={0.9}
              threshold={0.1}
            >
              <div className="min-w-[320px] bg-[#181e2e] rounded-xl border border-[#2f3b59] shadow-md hover:shadow-[#C3FF00]/30 transition-shadow flex flex-col">
                <Image
                  src="/project3-thumb.jpg"
                  alt="Project 3"
                  width={320}
                  height={180}
                  className="rounded-t-xl object-cover"
                />
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Landing Page Modern
                  </h3>
                  <p className="text-white/80 mb-3 text-sm">
                    Landing page responsif dengan animasi scroll dan integrasi
                    API.
                  </p>
                  <div className="flex gap-2 mb-4">
                    <span className="bg-[#C3FF00] text-black px-2 py-1 rounded text-xs font-semibold">
                      Next.js
                    </span>
                    <span className="bg-[#181e2e] border border-[#C3FF00] text-[#C3FF00] px-2 py-1 rounded text-xs font-semibold">
                      TailwindCSS
                    </span>
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block px-4 py-2 bg-[#C3FF00] text-black font-bold rounded hover:bg-[#b3e600] transition"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#10172b]">
        <div className="container mx-auto max-w-xl">
          <SplitText
            text="Mari bekerja sama!"
            className="text-4xl font-bold text-[#C3FF00] mb-8 text-center"
            delay={30}
            duration={0.5}
            splitType="words"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
          />
          <form className="bg-[#181e2e] rounded-xl p-8 border border-[#2f3b59] shadow-lg flex flex-col gap-6">
            <input
              type="text"
              placeholder="Nama"
              className="bg-transparent border-2 border-[#C3FF00] focus:border-[#fff] rounded px-4 py-3 text-white outline-none transition placeholder:text-[#C3FF00]/60"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border-2 border-[#C3FF00] focus:border-[#fff] rounded px-4 py-3 text-white outline-none transition placeholder:text-[#C3FF00]/60"
              required
            />
            <textarea
              placeholder="Pesan"
              rows={4}
              className="bg-transparent border-2 border-[#C3FF00] focus:border-[#fff] rounded px-4 py-3 text-white outline-none transition placeholder:text-[#C3FF00]/60 resize-none"
              required
            />
            <button
              type="submit"
              className="bg-[#C3FF00] text-black font-bold py-3 rounded hover:bg-[#b3e600] transition"
            >
              Kirim Pesan
            </button>
            <div className="text-center text-white/70 mt-2">
              Email:{" "}
              <a
                href="mailto:dimas@email.com"
                className="text-[#C3FF00] underline"
              >
                dimas@email.com
              </a>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-[#0A1021] py-8 border-t border-[#2f3b59]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-center md:text-left">
            Dimas Dwi A.P &copy; {new Date().getFullYear()} &middot; All rights
            reserved.
          </div>
          <div className="flex gap-5 justify-center">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C3FF00] hover:text-white transition text-2xl"
            >
              {/* GitHub Icon */}
              <svg
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.01-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C3FF00] hover:text-white transition text-2xl"
            >
              {/* LinkedIn Icon */}
              <svg
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.62 2.01 3.62 4.62v4.69z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C3FF00] hover:text-white transition text-2xl"
            >
              {/* Instagram Icon */}
              <svg
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.92 1.45-.44.44-.86.7-1.45.92-.46.17-1.26.354-2.43.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07 5.77.128 4.87.31 4.13.54c-.8.25-1.48.6-2.15 1.27-.67.67-1.02 1.35-1.27 2.15-.23.74-.412 1.64-.47 2.92C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.28.24 2.18.47 2.92.25.8.6 1.48 1.27 2.15.67.67 1.35 1.02 2.15 1.27.74.23 1.64.412 2.92.47C8.332 23.988 8.736 24 12 24s3.668-.012 4.948-.07c1.28-.058 2.18-.24 2.92-.47.8-.25 1.48-.6 2.15-1.27.67-.67 1.02-1.35 1.27-2.15.23-.74.412-1.64.47-2.92.058-1.28.07-1.684.07-4.948s-.012-3.668-.07-4.948c-.058-1.28-.24-2.18-.47-2.92-.25-.8-.6-1.48-1.27-2.15-.67-.67-1.35-1.02-2.15-1.27-.74-.23-1.64-.412-2.92-.47C15.668.012 15.264 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.844-10.406a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

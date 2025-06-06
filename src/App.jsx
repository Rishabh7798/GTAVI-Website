import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1.4,
      x: "-50%",
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[8px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[12rem] leading-none -ml-40">grand</h1>
                <h1 className="text-[12rem] leading-none ml-20">theft</h1>
                <h1 className="text-[12rem] leading-none -ml-40">auto</h1>
              </div>
              <img
                className="absolute character w-[450px] h-auto -bottom-[150%] left-[65%] -translate-x-1/2  scale-[3] rotate-[-20deg]"
                src="./boybg.png"
                alt=""
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full h-[80%] ">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="py-20 absolute w-[400px] h-auto scale-[1.0] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[45%] ">
                <h1 className="text-6xl">Still Running,</h1>
                <h1 className="text-6xl">Not Hunting</h1>
                <p className="mt-10 text-l font-[Helvetica_Now_Display]">
                  Ahh shit, here we go again... <br />
                  I didn’t come here to be a legend. I came here to lay low.
                  <br />
                  But hey, if becoming a legend happens by accident... Then so
                  be it.
                </p>
                <p className="mt-3 text-l font-[Helvetica_Now_Display]">
                  <b>
                    Trust gets you killed. Love gets you hurt. And being real?
                    That gets you hated.
                  </b>{" "}
                  <br />
                  I’ve seen loyalty fade quicker than brake lights. They come,
                  they go. But I remain — calm in the storm, sharp in the
                  silence. It’s not about being the strongest… It’s about
                  lasting the longest. <br />
                  Me? I’m not a hero. I’m not a villain. I’m that guy who just
                  wanted a quiet life… then accidentally became a drug kingpin
                  because Google Maps glitched. <br />
                  Vice City’s got rules… but we don’t follow 'em. We bend 'em,
                  break 'em, and then throw ‘em off a rooftop into a pool party
                  full of influencers and FBI agents. <br />
                </p>
                <h1 className="text-3xl">
                  The Sunshine's Fake, But the Trouble’s Real.
                </h1>
                <h1 className="text-6xl">gta VI - May 2026</h1>

                {/* <div className="mt-10 flex justify-center items-center gap-4">
                  <a href="/Resume.pdf" download>
                    <button className="bg-black text-white border border-white px-10 py-6 text-2xl rounded transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:border-transparent">
                      Download Now
                    </button>
                  </a>
                  <button className="bg-black text-white border border-white px-10 py-6 text-2xl rounded transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:border-transparent">
                    Download Now
                  </button>

                  <a href="https://github.com/Rishabh7798" target="_blank" rel="noopener noreferrer">
                    <button className="px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-300 transition text-xl">
                      Created by Rishabh Giri
                    </button>
                  </a>
                  <button className="bg-black text-white border border-white px-6 py-3 rounded-full font-bold text-xl transition-all duration-300 hover:bg-white hover:text-black hover:border-transparent">
                    Created by Rishabh Giri
                  </button>
                </div> */}
{/*  */}
                <div className="mt-10 flex justify-center items-center gap-4">
                  <button className="bg-yellow-500 text-black border border-transparent px-10 py-6 text-2xl rounded transition-all duration-300 hover:bg-black hover:text-white hover:border-white">
                    Download Now
                  </button>
                  <button className="bg-white text-black border border-transparent px-6 py-3 rounded-full font-bold text-xl transition-all duration-300 hover:bg-black hover:text-white hover:border-white">
                    Created by Rishabh Giri
                  </button>
                </div>
{/*  */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

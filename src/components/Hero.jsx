// Hero.jsx
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function Hero() {
  const heroRef = useRef();

  useGSAP(() => {
    gsap.from(heroRef.current.children, {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power2.out",
      stagger: 0.3,
    });
  }, []);

  return (
    <section
      ref={heroRef}
      style={{ fontFamily: "roboto" }}
      className="text-center py-10 sm:py-20 bg-transparent"
    >
      <h1 className="text-4xl sm:text-6xl font-bold text-gray-800">
        Connecting People Across Faiths & Interests
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 mt-10">
        A place where communities come together to connect and celebrate.
      </p>
    </section>
  );
}

export default Hero;

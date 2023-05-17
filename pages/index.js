import { useEffect, useRef } from "react";
import { personalDetails } from "@/data";
import { gsap } from "gsap";
import Image from "next/image";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  // useEffect(() => {
  //   const tl = gsap.timeline();
  //   tl.from(
  //     h11.current,
  //     {
  //       x: "-100%",
  //       delay: 0.8,
  //       opacity: 0,
  //       duration: 2,
  //       ease: "Power3.easeOut",
  //     },
  //     "<"
  //   )
  //     .from(
  //       h12.current,
  //       {
  //         x: "-100%",
  //         delay: 0.5,
  //         opacity: 0,
  //         duration: 2,
  //         ease: "Power3.easeOut",
  //       },
  //       "<"
  //     )
  //     .from(
  //       h13.current,
  //       {
  //         x: "-100%",
  //         delay: 0.1,
  //         opacity: 0,
  //         duration: 2,
  //         ease: "Power3.easeOut",
  //       },
  //       "<"
  //     )
  //     .from(
  //       myimageref.current,
  //       {
  //         x: "200%",
  //         delay: 0.5,
  //         opacity: 0,
  //         duration: 2,
  //         ease: "Power3.easeOut",
  //       },
  //       "<"
  //     );
  // }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,👋<br></br>My Name is<br></br>
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-3xl xl:text-5xl xl:leading-tight font-bold"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-2xl xl:text-4xl xl:leading-tight font-bold"
        >
          I'm <span className="text-orange-600">{tagline}</span>
        </h2>
      </div>
      <div className="mt-5 md:mt-0">
        <Image
          ref={myimageref}
          className="w-1/2 md:ml-auto"
          src={img}
          width={440}
          height={440}
          alt="Abhi Kolapkar"
          style={{borderRadius: '50%'}}
        />
      </div>
    </main>
  );
}

export default Home;

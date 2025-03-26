import React, { useRef } from "react";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero";
import Container from "../components/Container.jsx";
import Card from "../components/Card.jsx";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Home() {
  const leftRef = useRef();
  const rightRef = useRef();
  const whyRef = useRef();
  const cardRef = useRef();
  const btmRef = useRef();

  useGSAP(() => {
    gsap.from(leftRef.current.children, {
      delay: 0.5,
      duration: 1,
      opacity: 0,
      x: 50,
      ease: "power2.out",
      stagger: 0.2,
    });

    gsap.from(rightRef.current.children, {
      duration: 1,
      opacity: 0,
      scale: 0,
      y: 50,
      ease: "power2.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: rightRef.current,
        scroller: "body",
        start: "top 60%",
      },
    });

    gsap.from(whyRef.current, {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power2.out",
      scrollTrigger: {
        trigger: whyRef.current,
        scroller: "body",
        start: "top 70%",
      },
    }),
      gsap.from(cardRef.current.children, {
        duration: 1,
        scale: 0,
        ease: "elastic.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: cardRef.current,
          scroller: "body",
          start: "top 40%",
        },
      });

    gsap.from(btmRef.current.children, {
      duration: 1,
      opacity: 0,
      y: 80,
      ease: "elastic.out",
      scrollTrigger: {
        trigger: btmRef.current,
        scroller: "body",
        start: "top 70%",
      },
    });
  });

  return (
    <div className="font-roboto bg-neutral-50">
      <Header />
      <Container>
        <Hero />

        <div className="flex flex-col lg:flex-row items-center lg:items-start px-4 mt-4">
          <div ref={leftRef} className="w-full lg:w-2/5">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMsAAAAnCAYAAAChfbzKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAtpSURBVHgB7V1PTBznFX+zu+afgYBzaMCuihWLSK2tuMWJeonBl7qHuCGXKrgHg1RhqT3UNT4mAqs5GqIc2sqoit1DoGoOdmoOiQ/N4hwqxaZy27RSSFwjFUNzsME2BrOwO3m/N/OW2WFnd3YBAcv3k1bs7sz3Z96833u/933jtUVFYnrGbrMj1B6x6Dtk02GLqM62qI4MDLYYLJtmbaIJsmjCTtKH/FW8od6aoAJhFXIyE6QpEqFT/PaMIYbBtoZNt+0UvcukuRy2SSiy3J2x63ZHqDdl0RkyMCgl2JxtUnQ+DGnykuXejN0ei9Alk0kMShxxlmhdueRZJFfrrx/avdEoXTFEMdgBaLMi9MnkjH046ITAzMJEQTbpJAODnYXZ5SQd21dv3fYfyJpZkFEMUQx2KOpi0ewZZlVmcYnSRwYGOxlO4X/MW8NkkAVLw1aU7lKR4PbEnZOBQYkg/lytdUw/ZMgw3kO5QkXg8YJNfcNP6cRv5ujkhSc0/cAmA4MSQBsngE79kE4D+JKzyiUKidO/m6epBylq3BOh8XspIYwXLQeicrym0qL+ripq2GMyjsE2BMuxhRR9f3+9NZvOLJxVfhW2/bWbSzT2VVIyCP76iQLocRBp6MYiGRhsS1jUVEHUjrdCFlT+XNQfDtMW2WLw48Kcf+TmspFmBtsWrLjwiJdDFt6h78zXANmj/+pT+ln/fMGOj7Yn3p6j81zXFNIWxEQW82cufNbsFgbjUyk6/6eVseOfL4dumw1oi/E3Cpgr5hgEtUuuc/zAvRu+kSCDotAmz0XiHVcTrfnOhqGHbyxllVxhgRtcSFYau7MsBBu/l+nYmAO+HwnpsEKuz5bYyZx+4DiFZkcvrt1MyPje/sfuJNdkm4z+ea7+a/YCc8f4595bCD0miBX/V3hyrRUIUJDgpQJ5wn5mxq4LI8FQqBeK7+7bmtKr57Vy6jhaRsXixEtl1PtGefozSHv6t/M5HXw9Mfp5Mr1EP7KBGW4tgD1KKZNFLXoxxvHxcBgaVFdSaNRWEf35bJK+x2Q5+8coffA3q6h+wgJRc5RfHa+U0eD1RUf2vbSLXuVXNiALYBXP2/bVI7to5NaSSBxti0w46kodHG87FJP3UzMp+vt/+byXEeUTkmmAwesJav53UsgIYB7IxuNTDonaDsZWzQlzgcPLymJ9hLqPl+e8VpWlPa9VUP+Hi5It/MRHX3BURHcEOcxdgbYD3K7l+WjGXPT8szx3tIFdRtyxmhsjdPJoeXpFE5n5hb3RdEYFMB8cRx84rscgKTEOxtP5w6Y43nYQdo5lBGKvPTAuAtPwp4mMPvzXh+vXYwAyGtpoH965Fw1OKLwIFu4hSTiFH8gc+57N/M5LFAeZ2WUjin1EdEgXWc6+n5IX9n2CpJZXkmjbc5cW6IvJZLot+hq4wsSbt+V7HNc6Z+yrZWkDQNrNzTv9ou34ZNL9PkUn+5/Q8GiCaiosMYMzp0TGPBCB4/9cluO3uF+0yYVRd96th2LiaH75h3Exd5HMPHfMCXNXm8O58F3/1cWMdkPsfLhOHMccReJxe8wdfaFP77zRfvCjhJwDW6ImFdllO2MCOHbry2X5C6AN5KP2C1JhHAUI4LUH+sW4sPX0g1T6+lA3j3y2LMEFc/ZmMRzvuTRPY18m5bj2sVaJzJdVF0tFqS4f5zARv4P/sNmmD5gU/7tv0U8HojR5fzVR3hmJcFbJfPzM2cBcoIu/rKL1RvePyqij1Ymy2BzFTc4Xqf1tMb+fvP3EKeLfrJaIhBuA7xDxsH/kRV9HJV07gBpmkd9X8HEn+4CosJn2AWithCiIfvAZNxS20HNgGwSUbMDc4KjIfHBqRGZcI+6PXqcuZAz17KbmvY7tBz9alKynQCQGgeDcmAcIhzanXWkJiQd7dP/Y+Yz+4egILM17neuHs+u8YStxas6wPe0VdO2taiHPkedj1Ms2USDKiwR27xFsAWJibCgOENZrD1wvyKTZC8C8Mfb756rSGQlkQT/IPniKBP1d6KoQJaBZaG4BgYLWgqZYmLO+yKLF/zNpCUG+/awtBPn57yM00JnKIMrASPZ/AbBehbAfbYdWZAUcZXwqfEGrbXEDWg9GnbrAdWBINiVNWKhEgCxU6HVPs4wbu0NyU3vayzIkApw+iCy6+tV60LltcHSMIRnvuHMO3kPuKVGkT3b64U9XahttB2e9eKCKI7dDpFZXZp54eZc4qEodzaje+4Y567w1gMwtUE4E9av28ttDJBYTa+zOQnp8EBz3A1IybdenthybdmUX2uG4yGseEwReD4QiC24gnMdrrEeclZFRQBQQ5uM3Vy48F1G0v0LwOOAmbET9oyhmQcML2ErlV7pP/oys0MDRU1fm/OPkGleLeehxvBRwQDieEiRbH15bSR3DEg5ZCQEA5NRsBfS5K43IMEc4U8IBCwkUQUD2kXlyf6h5vP3WBPiz91rU/6pxrseuLzRG5aXnv99TJYEAEgw1EsZBtlrjPZ2NUZImKJr7LDC54+iuVXWLSjAQRmuXfERB1NNCOR8a652JwRm8bTQtq4G2IiAnpGBuL0/fJDiGRU5EbniA7xbFebyFdtDeCdqqo6FvBQgo+0a8zN5yYKU47/W1RdRurF/5TiUcZA0A8gBaYEOq9bSvyLBC9nSyQfe2vDIMklPRsMfJCJgT5qYyzFt3Nrrn4OWVdxKYXBs7GcYWeUwdJDVjv2aZgAWfMLAsmoCFJsKcHLSaoITpP5Wi67ct+sNfc/7jy4LYjfQOfe9oTpt+wJ9hiGFX22p9sNlQUkuknnFW4pA9EUmhuSGD9MZP37fpL2/tlhuPwKGbm5BAsooTsNyqAQL9+oMN6gOtz1BrwDmg4+GUkCZDWfpU28rKoMeW3ggP/T8V0D6/TSJCkGZu28K1i2RZIrGP9gu1ooBfpOfOdpOVtSzPHOo5WCiAxNInSrTWgf0Q1EF0SOvH7nZYdcXalELKpocxPK//9SMbPxWTc1Us1wqWEiYMCq1XEEFgDDiVOhZuMiLHVnk4E46HzAuH1QIc313oqpQiHo4L6A3VgIFrq+bjem1wqO7jjjP4ASeQoj5LVsZ4cBBEbl2kQH+60gR71VSutjv6AlkwpgIFvHMtCWdMnlOLBKnCMgvqhJ735mVhoPu4LUT299t6KJpRn2HuGGvIXVBCtsN8vBvAen2wtd8fAJH4trPyhpe0eWVXaDUTCF5bkbs2/dC+zGnmVK5zwXJcPKLCWtD3RoVEhEIBAyG7VLtpeKvCKwkUuuzZsCd4wWMjrg3jFtvnes3Jbw/tN5stnF3/TFkKQoAsF39RuUpJ5LLretuUN+6PSS+cWdqZAnn/LYukTi6askW+fAC7IUe2sqMbbC50KRmZEpIbxEHmQRaCdN1ETDxXa+0XqpYlKZ6IUl4pJoU+0uBTO+smZRCQJnteX5/lO4PShUqobJJ7M8HhPe7+dcBSrI+lWG+YxrqLGrb+KFZ6GexcZJOzmwU7SftR26dngwcqObvctUM+/uIsRzobRLe4sJSVHreewYoFCiq9YN31NTDYbmCCXP5WrdXlvl/B1EP7TMSid6gIOJtbzhq5d/fYwGAbAz8knv6Fl1V57v+P7E/4TxsZGOxwsE7qaqhd+Q3kVSmgPEmvU8iNSgODUoVt03kvUYBVZKmvt2aResgQxmCHgnfr3214xurzfx+43OD+4B4kWRMZGOwQgCiNz1hZ/2uVwEocRQ0yDLPpKhkYlDjYz2eZKL8OIop7Tn5MP7I7+UTswTSRgUGJgQv5UUpSZ77/Oi/0rg9kGeehTvcZsiYyMNjmEJJY1NdQY8XDnF/UFqmbafArfS+SIY7B9sI/eKXrKgf+eFiSKNb8PIFknBgTxjakMdi6iEbo9pMlmsBvFlOR+AYgDeZ2Vi7CGAAAAABJRU5ErkJggg=="
              alt=""
              className="mx-auto"
            />
            <h1 className="text-4xl lg:text-6xl mt-2 font-sans font-medium leading-tight text-center lg:text-left">
              Discover, Connect{" "}
              <span className="inline-flex items-end mx-2">
                <img
                  src="https://communionhub.org/static/media/small-card-2.bd207a83f52c1a02bbc0.png"
                  alt=""
                  className="w-16"
                />
              </span>
              & Celebrate Together{" "}
              <span className="inline-flex items-end mx-2 align-bottom pt-4">
                <img
                  src="https://communionhub.org/static/media/8-people.f4fdf0bdfd7eeb954b92.png"
                  alt=""
                  className="w-40"
                />
              </span>
            </h1>
            <p className="text-base lg:text-[21px] pt-7 text-gray-500 text-center lg:text-left">
              Communion Hub is a dynamic platform designed to bring diverse
              groups and communities together through various events and
              gatherings. Whether it's cultural festivals, social meetups,
              networking events, or hobby-based gatherings, <b>Communion Hub</b>{" "}
              makes it easy to find and engage with like-minded people.
            </p>
            <div className="flex justify-center lg:justify-start mt-4">
              <Link to={"events"}>
                <button className="p-2 px-8 bg-stone-900 rounded-full text-lg text-white hover:bg-neutral-500 cursor-pointer">
                  Explore Events ➝
                </button>
              </Link>
            </div>
          </div>

          <div
            ref={rightRef}
            className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-3/5 ml-5 mx-auto"
          >
            <div className="w-54 h-95 overflow-hidden rounded-t-full rounded-b-full mt-8 lg:mt-40">
              <img
                src="https://i.pinimg.com/originals/ed/c5/3d/edc53df66fa98a5f88e54946a0cd7839.jpg"
                alt="Rounded Cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-54 h-95 overflow-hidden rounded-t-full rounded-b-full mt-8 lg:mt-20">
              <img
                src="https://cdn6.dissolve.com/p/D929_16_150/D929_16_150_1200.jpg"
                alt="Rounded Cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-54 h-95 overflow-hidden rounded-t-full rounded-b-full mt-8 lg:mt-0">
              <img
                src="https://www.ateamsystems.com/wp-content/uploads/2020/05/Group-of-happy-computer-programmers-working-together-on-desktop-PC-at-corporate-office-scaled.jpg"
                alt="Rounded Cover"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <h1
          ref={whyRef}
          className="mt-20 lg:mt-40 text-4xl lg:text-6xl text-center font-bold mb-4 lg:mb-[-120px]"
        >
          WHY COMMUNION HUB?
        </h1>

        <div
          ref={cardRef}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-items-center min-h-screen px-4"
        >
          <Card
            title="Diverse Communities"
            content="Engage with people from all backgrounds and interests."
            image="https://www.pngkey.com/png/full/206-2066068_community-icon-community-icon-png.png"
            bgColor=""
            shadow=""
            height="h-92"
            width="w-86"
          />
          <Card
            title="Exciting Events"
            content="Find and participate in gatherings that match your passion."
            image="https://www.pngkey.com/png/full/267-2671673_event-available-comments-event-icon-black.png"
            bgColor=""
            shadow=""
            height="h-92"
            width="w-96"
          />
          <Card
            title="Stronger Connections"
            content="Meet like-minded individuals and build lasting relationships."
            image="https://cdn4.iconfinder.com/data/icons/finance-business-3-2/32/People-Community-Group-1024.png"
            bgColor=""
            shadow=""
            height="h-92"
            width="w-96"
          />
        </div>

        <div className="bg-stone-900 text-white rounded-3xl w-full p-6 mt-10">
          <div ref={btmRef} className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/3 p-4">
              <h1 className="text-3xl lg:text-5xl font-semibold">
                Start Your Journey Today!
              </h1>
              <p className="text-base lg:text-xl pt-4 leading-relaxed">
                Communion Hub is where connections happen. Explore diverse
                events, from cultural gatherings to social meetups, bringing
                communities closer. Engage with like-minded individuals,
                celebrate shared experiences, and build meaningful
                relationships. Whether you're looking for inspiration, fun, or
                new opportunities, there's something for everyone. Join the
                movement of togetherness, explore events, and make every moment
                count. Start discovering today!
              </p>
              <div className="pt-3">
                <Link to={"/events"}>
                  <button className="mt-4 p-2 px-8 bg-gray-50 rounded-full text-lg text-stone-900 cursor-pointer hover:bg-neutral-500 font-semibold ">
                    Explore Events
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/3">
              <img
                src="https://farm7.staticflickr.com/6131/5942961521_1c30275b2b_z.jpg"
                alt=""
                className="object-cover w-full h-full rounded-tr-3xl rounded-br-3xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;

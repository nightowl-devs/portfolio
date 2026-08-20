"use client";
// import Image from "next/image";
// import { Term } from "./ui/term";

// export function AboutSection() {
//   return (
//     <section
//       className="flex flex-col gap-4 px-12 h-dvh justify-center "
//       id="about"
//     >
//       <h2 className="text-9xl font-bold text-black">
//         about <span className="text-blue">me</span>
//       </h2>
//       <div className="flex-row flex  justify-between mr-4 ">
//         <div className="">
//           <p className="max-w-2xl text-2xl text-black">
//             I'm{" "}
//             <span className="text-blue font-semibold">Stanisław Botwina</span>,
//             a{" "}
//             <Term definition="Works on the whole stack, the interface you see, the API behind it, the database, and the deploy.">
//               full-stack dev
//             </Term>{" "}
//             and UI designer from{" "}
//             <Term definition="A country with chill pepole.">Poland.</Term> I
//             like building stuff that looks a bit different but still feels easy
//             to use. Good code also matters, but honestly I mostly just care that
//             it works and actually ships.
//             <br />
//             <br />
//             Day to day that's the{" "}
//             <Term definition="The part of a site the user sees and clicks, buttons, layouts, everything rendered in the browser.">
//               frontend
//             </Term>{" "}
//             people click, the{" "}
//             <Term definition="Application Programming Interface, the contract that lets the frontend and backend talk to each other.">
//               API
//             </Term>{" "}
//             behind it, the{" "}
//             <Term definition="Where the data lives, users, posts, everything the site has to remember.">
//               database
//             </Term>
//             , and making sure it all stays live. I keep a shared{" "}
//             <Term definition="A shared set of components, colors, and type rules that keeps every screen consistent.">
//               design system
//             </Term>{" "}
//             and typed code so things don't break the moment I touch them. I also
//             geek out over{" "}
//             <Term definition="Search Engine Optimization, making sure the site actually ranks and shows up when people search for it.">
//               SEO
//             </Term>{" "}
//             and{" "}
//             <Term definition="Google's performance and quality checker, audits a site and scores it on speed, accessibility, SEO and best practices.">
//               Lighthouse
//             </Term>{" "}
//             scores, so the site ships fast, ranks, and passes the audits. Good
//             looks are just a bonus.
//             <br />
//             <br />
//             Also, I care about design more than I'd like to admit. Not the kinda
//             "everything is a gradient" design. The kind where every box, color,
//             and letter on the screen has a reason to be there. If a button needs
//             hunting, it's not designed.
//           </p>
//           <p className="text-sm text-gray">
//             (hover over the highlighted words to translate to english)
//           </p>
//         </div>
//         <div className="flex flex-row  ">
//           <div className="relative h-[500px] w-[400px] -rotate-12 overflow-hidden ">
//             <Image
//               src="/img/code.jpg"
//               alt="My code!"
//               width={400}
//               height={500}
//               className="object-cover"
//             />
//           </div>
//           <div className="relative h-[500px] w-[400px] rotate-12 overflow-hidden -ml-25">
//             <Image
//               src="/img/botwinka.jpg"
//               alt="wow thats me!"
//               width={400}
//               height={500}
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import { Term } from "./ui/term";
import { Button } from "./ui/button";

export function AboutSection() {
  return (
    <section className="flex flex-col gap-4 px-12 h-dvh justify-center " id="about">
      <h2 className="text-9xl font-bold text-black">
        about <span className="text-blue">me</span>
      </h2>
      <div className="flex-row flex  justify-between  mr-4 ">
        <div className="">
          <p className="max-w-2xl text-2xl text-black">
            I'm <span className="text-blue font-semibold">Stanisław Botwina</span>, a{" "}
            <Term definition="Works on the whole stack, the interface you see, the API behind it, the database, and the deploy.">
              full-stack developer
            </Term>{" "}
            and UI designer from <Term definition="A country with chill pepole.">Poland.</Term> I like to create stuff that is
            diffrent from the colorfull gradiently{" "}
            <Term definition="In my opinion - something that someone prompted into existance with the least effort possible and did not make any chnages to it causing it to look atrocious.">
              slop
            </Term>{" "}
            generated by LLM's.
            <br />
            <br />
            Each thing I create aims to be creative and unique enough to bring the visitor back. I also love working with people
            whether in large teams or cozy groups of friends.
            <br />
            <br />
            Around a year ago, I started working on a free mobile app called{" "}
            <Term definition="A mobile app that helps young people learn via scrolling just like on social media.">
              ZaliczTo.PL
            </Term>
            . It's almost finished and you can join the{" "}
            <Term definition="Want to join? Click on the word!">
              <a href="https://zaliczto.pl?utm_source=nightowl.dev">waitlist</a>
            </Term>{" "}
            to get to know as soon as it's ready.
            <br />
            <br />
            Recently I got into{" "}
            <Term definition="An online platform containing an unhealthy amount of coding exercises of various difficulties. It's often used by companies to test a candidate's skills.">
              LeetCode
            </Term>{" "}
            and I'm trying to solve a challange per day. It's not easy but I'm learning a lot and I genuinely enjoy solving them.
            <br />
            <br />
            If you are interested in my work, don't hesitate to contact me - I'll reply as soon as humanly possible.
          </p>
          <p className="text-sm text-gray">(hover over the highlighted words to translate to english)</p>
          <Button
            className="mt-2 w-full"
            variant="seccondary"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <p className="text-base font-display font-bold text-black">Shoot me an email - let's talk!</p>
          </Button>
        </div>
        <div className="flex flex-row justify-center [@media(min-width:1800px)]:mr-32">
          <div className="  h-125 w-100 -rotate-12 overflow-hidden ">
            <Image src="/img/code.webp" alt="My setup!" width={400} height={500} className="object-cover" />
          </div>
          <div className=" h-125 w-100 rotate-12 overflow-hidden -ml-25">
            <Image src="/img/botwinka.jpg" alt="wow thats me!" width={400} height={500} className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

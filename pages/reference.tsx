import Meta from "@/components/Meta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import rapid from "@/public/assets/rapid.webp";
import github from "@/public/assets/github.webp";
import vercel from "@/public/assets/vercel.webp";
import nextjs from "@/public/assets/nextjs.webp";
import tailwind from "@/public/assets/tailwind.webp";

const references = [
  {
    icon: rapid,
    title: "Rapid API",
    description:
      "All data used by Yeezy Application is sourced from the Rapid API Platform.",
  },
  {
    icon: github,
    title: "GitHub",
    description:
      "Yeezy Source Code is already published on GitHub under The MIT License (Open Source).",
  },
  {
    icon: vercel,
    title: "Vercel",
    description:
      "This application is deployed using Vercel Frontend Deployment Platform and accessible to everyone.",
  },
  {
    icon: nextjs,
    title: "Next.js",
    description:
      "Yeezy is developed from scratch using Next.js framework with some library integration.",
  },
  {
    icon: tailwind,
    title: "Tailwind CSS",
    description:
      "Tailwind CSS Framework is also implemented to build a interactive interface in this application.",
  },
];

export default function Reference() {
  return (
    <div>
      <Meta title="Yeezy: Reference" />

      <Header />

      <section className="text-white body-font">
        <div className="container px-5 my-40 mx-auto">
          {references.map((reference, index) => {
            if (index < references.length - 1) {
              if (index % 2 === 0) {
                return (
                  <>
                    <div className="flex items-center lg:w-3/5 mx-auto border-b border-gray-400 pb-10 mb-10 sm:flex-row flex-col">
                      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 flex-shrink-0">
                        <Image
                          src={reference.icon}
                          alt="icon"
                          width="80"
                          height="80"
                        />
                      </div>
                      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 className="text-lg title-font font-semibold mb-2">
                          {reference.title}
                        </h2>
                        <p className="leading-relaxed text-base">
                          {reference.description}
                        </p>
                      </div>
                    </div>
                  </>
                );
              } else {
                return (
                  <>
                    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-400 sm:flex-row flex-col">
                      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 className="text-lg title-font font-semibold mb-2">
                          {reference.title}
                        </h2>
                        <p className="leading-relaxed text-base">
                          {reference.description}
                        </p>
                      </div>
                      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 flex-shrink-0">
                        <Image
                          src={reference.icon}
                          alt="appref"
                          width="80"
                          height="80"
                        />
                      </div>
                    </div>
                  </>
                );
              }
            } else {
              if (index % 2 === 0) {
                return (
                  <>
                    <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
                      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 flex-shrink-0">
                        <Image
                          src={reference.icon}
                          alt="apiref"
                          width="80"
                          height="80"
                        />
                      </div>
                      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 className="text-lg title-font font-semibold mb-2">
                          {reference.title}
                        </h2>
                        <p className="leading-relaxed text-base">
                          {reference.description}
                        </p>
                      </div>
                    </div>
                  </>
                );
              } else {
                return (
                  <>
                    <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
                      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 className="text-lg title-font font-semibold mb-2">
                          {reference.title}
                        </h2>
                        <p className="leading-relaxed text-base">
                          {reference.description}
                        </p>
                      </div>
                      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 flex-shrink-0">
                        <Image
                          src={reference.icon}
                          alt="appref"
                          width="80"
                          height="80"
                        />
                      </div>
                    </div>
                  </>
                );
              }
            }
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}

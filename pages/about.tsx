import Image from "next/image";
import Meta from "@/components/Meta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import profile from "@/public/assets/profile.webp";

export default function About() {
  return (
    <div>
      <Meta title="Yeezy: About" />

      <Header />

      <section className="text-white body-font">
        <div className="container px-5 py-40 lg:flex lg:h-screen lg:justify-center lg:items-center">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <Image
                    src={profile}
                    alt="profile"
                    className="rounded-full"
                    width="100"
                    height="100"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-semibold title-font mt-4 text-lg">
                    Ezra Lazuardy Wijaya
                  </h2>
                  <div className="w-12 h-1 bg-orange-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    Undergraduate Computer Engineering Student
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  I'm Ezra Lazuardy, a polyglot software engineer from
                  Indonesia, experienced in mobile development and full-stack
                  web development.
                </p>

                <p className="leading-relaxed text-lg mb-4">
                  I use Laravel, Vue.js, and Inertia.js as my main tech stack in
                  full-stack web dev. Sometimes I also use the MEVN stack to
                  develop Monolith / Microservices applications. However, in
                  mobile development, I love using native Kotlin to build and
                  develop Android apps. Implementing Android Clean Architecture
                  with MVVM architectural patterns is my main discipline while
                  developing Android apps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

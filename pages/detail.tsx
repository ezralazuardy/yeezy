import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Meta from "@/components/Meta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CardDataProps } from "@/types/CardProps";

export default function Detail() {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [data, setData] = useState<CardDataProps | null>(null);

  useEffect(() => {
    if (!router.query.data) return;
    const _data = JSON.parse(router.query.data.toString()).data;
    setTitle(`: ${_data.name}`);
    setData(_data);
  }, []);

  return (
    <div>
      <Meta title={`Yeezy${title}`} />

      <Header />

      <section className="text-white body-font overflow-hidden">
        <div className="container px-5 py-40 md:py-32 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h1 className="text-4xl title-font font-black mb-6">
                {data ? data.name : ""}
              </h1>
              <p className="leading-relaxed text-lg font-light mb-8">
                {data ? data.description : ""}
              </p>
              <div className="flex mt-4">
                <span className="title-font font-black text-2xl mt-2">
                  ${data ? data.price : ""}
                </span>
                <button className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-700 rounded transition-colors">
                  Add to Cart
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 hover:bg-gray-400 p-0 border-0 inline-flex items-center justify-center text-gray-500 transition-colors ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <Image
              alt="cover"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-2`xl"
              src={data ? data.image : ""}
              width="400"
              height="400"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

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
              <h1 className="text-3xl title-font font-bold mb-4">
                {data ? data.name : ""}
              </h1>
              <div className="flex mb-4">
                <a className="flex-grow text-orange-500 border-b-2 border-orange-500 py-2 text-lg px-1">
                  Description
                </a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Reviews
                </a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Details
                </a>
              </div>
              <p className="leading-relaxed mb-4">
                {data ? data.description : ""}
              </p>
              <div className="flex">
                <span className="title-font font-medium text-2xl">
                  ${data ? data.price : ""}
                </span>
                <button className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">
                  Add to Cart
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
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
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-lg"
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

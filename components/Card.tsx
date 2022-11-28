import Image from "next/image";
import Link from "next/link";
import CardProps from "@/types/CardProps";

export default function Card(props: CardProps) {
  return (
    <div className="lg:w-1/4 sm:w-1/2 p-4">
      <Link
        href={{
          pathname: "/detail",
          query: { data: JSON.stringify(props) },
        }}
      >
        <div className="flex relative">
          <Image
            alt="thumbnail"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={props.data.image}
            width="600"
            height="360"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-zinc-400 bg-white opacity-0 hover:opacity-100 transition-opacity">
            <h2 className="tracking-widest text-sm title-font font-black text-orange-500 mb-1">
              ${props.data.price}
            </h2>
            <h1 className="title-font text-lg font-bold text-gray-900 mb-3 line-clamp-1">
              {props.data.name}
            </h1>
            <p className="font-medium leading-relaxed line-clamp-3 text-gray-900">
              {props.data.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

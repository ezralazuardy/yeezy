import { useState, useEffect } from "react";
import ApiOptions from "@/types/ApiOptions";
import CardDataProps from "@/types/CardProps";
import Card from "@/components/Card";
import ListLoader from "@/components/ListLoader";

const options: ApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY ?? "",
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST ?? "",
  },
};

export default function List() {
  const [data, setData] = useState<Array<CardDataProps>>([]);

  useEffect(() => {
    setTimeout(() => {
      fetch(
        "https://api.jsonbin.io/v3/b/6380406b65b57a31e6c2fa37?meta=false",
        options
      )
        .then((response) => response.json())
        .then((response) => setData(response))
        .catch((err) => console.error(err));
    }, 250);
  });

  return (
    <section className="text-white body-font">
      <div className="container px-5 mt-36 lg:mt-28 mb-32 lg:mb-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data.length === 0 ? (
            <ListLoader count={12} />
          ) : (
            data.map((item: any, index: number) => (
              <Card key={index} data={item} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

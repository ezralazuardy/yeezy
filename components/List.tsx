import { useState, useEffect } from "react";
import Card from "@/components/Card";
import ApiOptions from "@/types/ApiOptions";
import CardDataProps from "@/types/CardProps";

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
  }, []);

  return (
    <section className="text-white body-font">
      <div className="container px-5 mt-28 mb-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data.length === 0 ? (
            <p className="mx-auto text-center font-bold mt-4">Loading...</p>
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

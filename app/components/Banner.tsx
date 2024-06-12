import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";

async function getData() {
  const query = "*[_type == 'bannerImage'][0]";
  const data = await client.fetch(query);
  return data;
}

export default async function Banner() {
  const data = await getData();
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="pb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl uppercase">
            Your skin is our planet
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            당신의 피부는 cosmetics이 지켜야 할 또 하나의 환경입니다. 내면의
            건강한 피부환경을 만들어보세요.
          </p>
        </div>
        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              src={urlFor(data.image1).url()}
              alt="Banner Photo"
              width={500}
              height={500}
              priority
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(data.image2).url()}
              alt="Banner Photo"
              width={500}
              height={500}
              priority
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          <Link
            href="/Toner"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            스킨
          </Link>
          <Link
            href="/Lotion"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            로션
          </Link>
          <Link
            href="/MoisturizingCream"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            크림
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";
import { client } from "../lib/sanity";
import { productType } from "../interface";

async function getData() {
  const query = `*[_type == 'product'][0...4] | order(_createdAt desc) {
    _id,
    price,
    name,
    "slug": slug.current,
    "categoryName" : category->name,
    "imageUrl" : images[0].asset->url
}`;

  const data = await client.fetch(query);

  return data;
}

export default async function Products() {
  const data: productType[] = await getData();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            인기제품
          </h2>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((item) => {
            return (
              <div key={item._id} className="group relative">
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <Image
                    src={item.imageUrl}
                    alt="Product Image"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`/product/${item.slug}`}>{item.name}</Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {item.categoryName}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ₩{item.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { productType } from "../interface";
import { client } from "../lib/sanity";
import Image from "next/image";

async function getData(category: string) {
  const query = `*[_type=='product' && category->name == '${category}']{
    _id,
    "imageUrl": images[0].asset->url,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name
}`;

  const data = await client.fetch(query);

  return data;
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const data: productType[] = await getData(params.category);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {params.category}
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

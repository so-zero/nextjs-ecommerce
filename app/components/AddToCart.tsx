"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface CartType {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
}

export default function AddToCart({
  currency,
  description,
  image,
  name,
  price,
}: CartType) {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    id: "id",
  };
  return (
    <Button
      onClick={() => {
        addItem(product), handleCartClick();
      }}
    >
      장바구니 담기
    </Button>
  );
}

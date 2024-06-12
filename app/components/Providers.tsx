"use client";

import { ReactNode } from "react";
import { CartProvider as UseCartProvider } from "use-shopping-cart";

export default function CartProvider({ children }: { children: ReactNode }) {
  return (
    <UseCartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="stripe.com"
      cancelUrl="stripe.com/error"
      currency="KRW"
      billingAddressCollection={true}
      shouldPersist={true}
      language="ko-KR"
    >
      {children}
    </UseCartProvider>
  );
}

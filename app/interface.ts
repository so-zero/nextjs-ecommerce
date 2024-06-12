export interface productType {
  _id: string;
  name: string;
  price: number;
  slug: string;
  categoryName: string;
  imageUrl: string;
}

export interface allProductType {
  _id: string;
  name: string;
  price: number;
  slug: string;
  categoryName: string;
  images: any;
  description: string;
}

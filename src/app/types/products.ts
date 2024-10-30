export type ProductsUser = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;

  createdAt: Date;
};

export type Product = ProductsUser & {
  image: string;
  description: string;
};

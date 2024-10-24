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

export type ProductListProps = {
  products: ProductsUser[];
  onProductClick: (product: ProductsUser) => void;
};

export type searchBarProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type categoryFilterProps = {
  categories: string[];
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export type ProductDetailprops = {
  product: Product;
  onBack: () => void;
};

export type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

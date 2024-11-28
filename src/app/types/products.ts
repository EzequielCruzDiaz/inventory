export type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type ApiProducts = Omit<Product, "id"> & {
  $id: string;
};

export type ApiProductWithout = Omit<
  Product,
  "$createdAt" | "$updatedAt" | "$permissions" | "$databaseId" | "$collectionId"
>;

export type Category = {
  id: string;
  name: string;
};

export type ApiCategory = ChangeApiId<Category>;

export type ChangeApiId<T> = Omit<T, "id"> & {
  $id: string;
};

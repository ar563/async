export interface Category {
  _id: string;
  name: string;
  slug: string;
}

export interface Creator {
  role: string;
  _id: string;
  name: string;
}

export interface Product {
  _id: string;
  title: string;
  price: number;
  category: Category;
  description: null;
  createdBy: Creator;
  createdAt: Date;
  updatedAt: Date;
  slug: string;
}

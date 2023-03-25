export interface IProduct {
  _id: string;
  title: String;
  name: String;
  slug: String;
  description: String;
  quantity: Number;
  sold: Number;
  price: Number;
  priceAfterDiscount: Number;
  colors: String[];
  imageCover: String;
  images: String[];
  category: {
    name: String;
  };
  search: String;
  subcategories: String;
  brand: String;
  ratingsAverage: any;
  ratingsQuantity: Number;
  categories: {
    name: String;
  };
  
}

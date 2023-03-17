export interface IProduct {
  _id: String;
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
  subcategories: String;
  brand: String;
  ratingsAverage: Number;
  ratingsQuantity: Number;
  categories: {
    name: String;
  };
}

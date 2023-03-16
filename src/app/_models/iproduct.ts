export interface IProduct {

  _id: String,
 title: String, 
  slug: String,
  description:String,
  quantity:Number,  
  sold: Number,
  price: Number,  
  priceAfterDiscount: Number,
  colors: String[],
  imageCover: String,
  images: String[],
  category:  String,
   subcategories:String,
  brand:String,
  ratingsAverage: Number,
  ratingsQuantity: Number
}

export interface products {
  id: number,
  title: string,
  description:string,
  price:number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: [string, string, string]
}
export type Productos ={
  products: Array<products>
}

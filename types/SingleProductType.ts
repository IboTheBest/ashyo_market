import { ProductType } from "./ProductType"

export interface SingleProductType {
    color: any
    color_id: string
    configurations: []
    createdAt: string
    id: number
    image: string    
    price:string
    product: ProductType
    product_id:string
    updatedAt:string
}
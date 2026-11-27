export interface ProductInterface {
    id: number,
    title: string,
    description: string,
    price: number,
    category: string,
    thumbnail: string,
    stock: number,
    rating: number
}
export interface CreateProduct {
    title: string,
    description: string,
    price: number,
    category: string,
}

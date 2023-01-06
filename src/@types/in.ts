export interface ICoffee {
    id: string,
    imageUrl: string,
    name: string,
    milks: string[],
    sizes: string[],
    price: number,
    category: string,
    raiting: number,
}

export interface IBasketCoffee {
    
        name: string,
        milk: string
        size: string
        imageUrl: string,
        price: number,
        count: number,
    
}

export enum CategoriesValues {
    ALL = 'all',
    CAPP = 'capp',
    ES = 'es',
    MOC = 'moc',
    AM = 'am',
    RAF = 'raf'
}

export class Product {
  constructor(
    public id: number | string,
    public name: string,
    public price: number,
    public image: string,
    public description?: string
  ) {
    if (!description) this.description = '';
  }
}

export type ProductCartItem = Product & { quantity: number };

export class StoreProduct {
  constructor(
    public productId: number,
    public storeId: number,
    public price: number,
    public quantity: number,
    public productImage: string,
    public productName: string,
    public id?: string
  ) {}
}

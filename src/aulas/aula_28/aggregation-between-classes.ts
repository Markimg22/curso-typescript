/** Agregação entre Classes:
 *
 * Muito semelhante a associação, porém com uma ligação mais forte.
 * Uma classe depende totalmente da outra para funcionar corretamente.
 */

export class ShoppingCart {
  private readonly products: Product[] = [];

  addProducts(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }

  showAmountProducts(): number {
    return this.products.length;
  }

  totalPrice(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }
}

export class Product {
  constructor(public name: string, public price: number) {}
}

const shoppingCart = new ShoppingCart();
const product1 = new Product('Camisa', 100.59);
const product2 = new Product('Boné', 60.59);

shoppingCart.addProducts(product1);
shoppingCart.addProducts(product2);

console.log(shoppingCart);
console.log(shoppingCart.totalPrice());

export class ProductModel {


  // Doing this in the constructor, specifically the public keyword, is a shortcut for creating the properties and assigning them. In TypeScript, you can do this:
  constructor(public sku: string,
              public name: string,
              public imageUrl: string,
              public department: string[],
              public price: number) {

  }

}

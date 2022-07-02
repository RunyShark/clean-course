type Size = "" | "S" | "M" | "XL";
class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}
  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if ((<string>(<unknown>this[key])).length <= 0)
            throw Error(`${key} is empty`);
          break;
        case "number":
          if (<string>(<unknown>this[key])) throw Error(`${key} is zero`);

        default:
          throw Error(`${key} is not valid`);
      }
    }
    return true;
  }
  toString() {
    if (!this.isProductReady) return;
    return `${this.name}`;
  }
}

(() => {
  const bluePants = new Product("Blue pans");
})();

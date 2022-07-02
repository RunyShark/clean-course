(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    loadProduct(id: number) {
      console.log("Producto: ", { id, name: "OLED Tv" });
    }
    saveProduct(product: Product) {
      console.log("Guardando en base de datos", product);
    }
  }

  class ProductBloc {
    loadProduct(id: number) {
      console.log("Producto: ", { id, name: "OLED Tv" });
    }
    saveProduct(product: Product) {
      console.log("Guardando en base de datos", product);
    }
  }

  class Mailer {
    sendEmail() {
      console.log("Enviando correo a los clientes");
    }
  }

  class CartBloc {
    private itemsInCart: Object[] = [];
    AddToCart(productId: number) {
      console.log("Agregando al carrito ", productId);
    }
  }

  const productBloc = new ProductBloc();
  const cartBloc = new CartBloc();
  const productService = new ProductService();
  const mailer = new Mailer();
  productService.loadProduct(10);
  productService.saveProduct({ id: 10, name: "OLED TV" });
  mailer.sendEmail();
  cartBloc.AddToCart(10);
})();

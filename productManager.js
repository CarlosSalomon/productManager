class ProductManager {
  constructor() {
    this.products = [];
    this.idCounter = 0;
  }

  generateProductId() {
    return ++this.idCounter;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("Todos los campos son obligatorios");
      return;
    }

    if (!this.products.some((p) => p.code === code)) {
      let newProduct = {
        id: this.generateProductId(),
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };

      this.products.push(newProduct);

      console.log(`Se ha agregado el producto: ${title} con exito`);
    } else {
      console.log(`El codigo: ${code} se encuentra duplicado, verificar y reemplazar por favor`);
    }
  }

  getProducts() {
    console.log(this.products);
  }

  getProductById(id) {
    const okProduct = this.products.find((product) => product.id === id);

    if (okProduct) {
      console.log("Producto encontrado:");
      console.dir(okProduct);
    } else {
      console.log(`Producto con el id ${id} no existe`);
    }
  }
};
const productManager = new ProductManager();

console.log("---------Agrego productos-----------");
productManager.addProduct('producto 1', 'mercaderia', 300, 'imagen1.png', 'bcd123', 10);
productManager.addProduct('producto 2', 'mercaderia', 400, 'imagen2.png', 'bcd124', 5);

console.log("---------agrego producto con code repetido-----------");
productManager.addProduct('producto 2', 'mercaderia', 400, 'imagen2.png', 'bcd124', 5);

console.log("---------Agrego productos con campos vacios-----------");
productManager.addProduct('producto 3', 300, 'imagen3.png', 'bcd125', 10);

console.log("---------muestra de productos-----------");
productManager.getProducts();

console.log("---------busqueda por id-----------");
productManager.getProductById(1);

console.log("---------busqueda por id inexistente-----------");
productManager.getProductById(5);

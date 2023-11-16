import Product from "./Product.type";

type ProductsStore = {
  index: number;
  cont: number;
  products: Product[];
  interval: number;
  rotation: number;
};

export default ProductsStore;

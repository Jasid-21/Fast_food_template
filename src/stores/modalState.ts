import ModalState from "@/types/ModalState.type";
import { defineStore } from "pinia";
import Product from "@/types/Product.type";
import j_products from '@/json/products.json';

const useModalState = defineStore('modalState', {
  state: (): ModalState => ({
    product: j_products.products[0],
  }),

  actions: {
    setProduct(product: Product) {
      this.product = product;
    },

    removeProduct() {
      console.log("state");
      this.product = null;
    }
  }
});

export default useModalState;

import ProductsStore from '@/types/ProductsStore.type';
import { defineStore } from 'pinia';
import j_products from '@/json/products.json';

const useProductsStore = defineStore('products', {
  state: (): ProductsStore => ({
    index: 0,
    cont: 0,
    products: j_products.products.reverse().filter((p) => p.prefered),
    interval: 0,
    rotation: 0,
  }),

  getters: {
    getIndex: (state) => state.index,
  },

  actions: {
    setIndex() {
      if (this.index == this.products.length - 1) {
        this.index = 0;
        this.cont++;
      } else {
        this.index++;
      }

      this.setRotation();
    },

    setFirstPosition() {
      this.interval = 360 / this.products.length;

      this.products.forEach((i, idx) => {
        const deg = (this.interval * idx * Math.PI) / 180;
        i.initX = 200 * Math.cos(deg);
        i.initY = 200 * Math.sin(deg);
      });
    },

    setRotation() {
      this.rotation = 360 * this.cont + this.interval * this.index;
    }
  }
});

export default useProductsStore;

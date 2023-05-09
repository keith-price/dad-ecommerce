import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    product: null
  }),
  getters: {
    getProduct: (state) => state.product
  },
  actions: {
    setProduct(product) {
      this.product = product
    }
  }
})

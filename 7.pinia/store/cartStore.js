const { defineStore } = Pinia;
import productStore from "./productStore.js";

export default defineStore("cart", {
  state: () => ({
    cart: [],
  }),

  actions: {
    addToCart(productId, qty = 1) {
      this.cart.push({
        id: new Date().getTime(),
        productId,
        qty,
      });
    },
  },

  getters: {
    cartList: ({ cart }) => {
      const { products } = productStore();
      const cartItem = cart.map(item => {
        const product = products.find(product => product.id === item.productId) // item.productId 是購物車的
        return {
          ...item,
          product,
          subTotal: product.price * item.qty // 產品數量在購物車裡面
        }
      });
      const total = cartItem.reduce((a, b) => a + b.subTotal, 0)
      console.log(cartItem.length)
      console.log(cart)
      return {
        cartItem: [],
        total
      };
    },
  }
});
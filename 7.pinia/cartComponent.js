import cartStore from "./store/cartStore.js";
import productStore from "./store/productStore.js";
const { mapActions, mapState } = Pinia;

export default {
  computed: {
    ...mapState(cartStore, ["cartList"])
  },
  template: `<div class="bg-light p-4 my-4">

  <table class="table align-middle">
    <tbody>
      <tr v-for="cart in cartList.cartItem" :key="cart.id">
        <td width="100">
          <a href="#" class="text-dark"><i class="fas fa-times"></i></a>
        </td>
        <td width="100">
          <img
            :src="cart.product.imageUrl"
            class="table-image img-fluid" alt="" >
        </td>
        <td>{{cart.product.title}}</td>
        <td width="200">
          <select name="" id="" class="form-select">
            <option value="1">1</option>
          </select>
        </td>
        <td width="200" class="text-end">{{cart.product.subTotal}}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="5" class="text-end">總金額 NT$ {{cartList.total}}</td>
      </tr>
    </tfoot>
  </table>
</div>`
};
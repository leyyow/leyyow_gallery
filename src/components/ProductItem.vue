<script>
import SelectOption from "@/components/SelectDrpDown.vue";
import cart from "@/assets/cart.svg";
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  components: {
    SelectOption,
  },
  data() {
    return {
      cart,
      selectedItem: null,
      sizes: [
        { text: "Small", value: 1 },
        { text: "Medium", value: 2 },
        { text: "Large", value: 3 },
        { text: "XLarge", value: 4 },
      ],
      selectedColor: null,
      colors: [
        { text: "Red", value: 1 },
        { text: "Blue", value: 2 },
        { text: "Yellow", value: 3 },
        { text: "Black", value: 4 },
      ],
    };
  },
};
</script>
<template>
  <div class="container">
    <div class="hero_img d-flex justify-center align-center">
      <img :src="image" alt="product " class="product_img" />
    </div>
    <div class="header_container">
      <h2 style="width: 50%">{{ name }}</h2>
      <p class="price">N5,000</p>
    </div>

    <div class="select_container">
      <div>
        <h4>Colors</h4>
        <SelectOption
          v-model="selectedColor"
          placeholder="Select Color"
          :options="colors"
        />
      </div>
      <div>
        <h4>Sizes</h4>
        <SelectOption
          v-model="selectedItem"
          placeholder="Select Size"
          :options="sizes"
        />
      </div>
    </div>
    <div class="second_container">
      <button
        size="x-large"
        class="btn py-4 px-4 rounded-lg d-flex justify-space-between"
      >
        <i class=""> </i>
        <p>Add to cart</p>
        <div class="position-relative">
          <p class="position-absolute text-10 top-0 right-0 cart_counter translate-middle badge  bg-white"> 1 </p>
          <img :src="cart" alt="cart icon" class="cart_img" />
        </div>
      </button>
      <div></div>
    </div>
  </div>
</template>
<style scoped>
.header_container,
.select_container {
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
}
.select_container > div {
  width: 45%;
}
.cart_img {
  display: flex;
  justify-content: end;
  width: 25px;
}
.product_img {
  width: 223px !important;
  height: 223px !important;
}
h2 {
  font-weight: 400;
}
.price {
  font-size: 1.5rem;
  font-weight: 700;
}
.hero_img {
  background-color: #f9eeeb;
  border-radius: 8px;
  width: 100%;
  height: 280px;
  object-fit: contain;
}
.container {
  margin: 24px;
}
.top-10 {
  top: 10px;
}
.second_container {
  width: 100%;
}
.second_container > div {
  display: flex;
  flex-direction: column;
}
.v-row {
  margin: 0;
  align-items: center;
}
.second_container > button {
  margin: 32px 0;
  width: 100%;
}
.second_container > div > h3 {
  margin: 16px 0;
}
h4 {
  margin: 10px 0;
}


.btn {
  background: linear-gradient(to right, #5f40ee, #943fed);
  color: white;
}
.cart_counter {
  width: 12px;
  height: 15px;
  border-radius: 3px;
  padding: 0px 3px;
  color: orange;
}
</style>

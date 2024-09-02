<script>
import CartCatalogue from "@/components/CartCatalogue.vue";
import cart from "@/assets/cart.svg";
import shop from "@/assets/shop.svg";
import filter from "@/assets/filterICon.svg";
import searchIcon from "@/assets/searchIconGray.svg";
import MenuBar from "@/components/MenuBar.vue";
import whiteShoe from "@/assets/newShoe.png";
import brownShoe from "@/assets/brownShoe.svg";
import blueShoe from "@/assets/blueShoe.svg";
import SelectOption from "@/components/SelectDrpDown.vue";
export default {
  data() {
    return {
      CartCatalogue,
      filter,
      searchIcon,
      cart,
      shop,
      Products: [
        { img: blueShoe, price: 6000 },
        { img: brownShoe, price: 6000 },
        { img: whiteShoe, price: 6000 },
        { img: blueShoe, price: 6000 },
        { img: brownShoe, price: 6000 },
        { img: whiteShoe, price: 6000 },
        { img: blueShoe, price: 6000 },
        { img: brownShoe, price: 6000 },
        { img: whiteShoe, price: 6000 },
        { img: blueShoe, price: 6000 },
        { img: brownShoe, price: 6000 },
        { img: whiteShoe, price: 6000 },
      ],
      ProductDetails: [
        {
          name: "Unisex Shoes for Men and Women",
          price: "5000",
        },
      ],
      size: [
        {
          text: 'small',
          value: 'small'
        },
        {
          text: 'medium',
          value: 'medium'
        },
        {
          text: 'large',
          value: 'large'
        },
        {
          text: 'extra large',
          value: 'extra large'
        }
      ],
      selectedSize: null,
      colors: [
        {
          text: 'blue',
          value: 'blue'
        },
        {
          text: 'brown',
          value: 'brown'
        },
        {
          text: 'white',
          value: 'white'
        },
        {
          text: 'black',
          value: 'black'
        }
      ],
      selectedColor: null,
      activeCard: null,
      isSingleColumn: false,
    };
  },
  methods: {
    goToGrid() {
      window.location.reload();
    },
    handleCardClick(index) {
      this.activeCard = index;
      this.isSingleColumn = true;

      this.$nextTick(() => {
        const cardElement = this.$refs["Product" + index][0];
        cardElement.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    },
  },
  components: {
    MenuBar,
    SelectOption,
  },
};
</script>
<template>
  <div :class="{ hidden: activeCard !== null }">
    <div class="header_container">
      <MenuBar />
      <div class="d-flex justify-space-between align-center">
        <div
          class="searchBar d-flex align-center justify-space-between w-80 px-4"
        >
          <img :src="searchIcon" alt="searchIcon" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search for a product"
            class="search pa-3 d-flex w-80 align-center"
          />
        </div>
        <button class="filter w-15"><img :src="filter" alt="filter" /></button>
      </div>
    </div>
    <ul class="px-4">
      <li>All</li>
      <li>Unisex</li>
      <li>Tempered</li>
      <li>Journey</li>
      <li>Black Checkers</li>
    </ul>
  </div>
  <div class="hidden" :class="{ 'visible ': activeCard !== null }">
    <div class="header ma-2">
      <div
        class="d-flex flex-0-0 rounded-lg pa-2 my-2 mx-4 w-25 justify-space-between"
      >
        <img :src="shop" alt="" class="shop icon" @click="goToGrid()" />
        <div class="position-relative d-flex w-30">
          <img :src="cart" alt="shopping cart icon" class="hut" />
          <p
            class="position-absolute text-10 top-0 right-0 cart_counter translate-middle rounded bg-white"
          >
            3
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="productContainer" :class="{ 'single-column': isSingleColumn }">
    <div
      class="card position-relative"
      v-for="(Product, index) in Products"
      :key="index"
      @click="handleCardClick(index)"
      :ref="'Product' + index"
    >
      <div
        class="img-card d-flex align-center flex-column-reverse"
        :class="{ 'flex-col': activeCard !== null }"
      >
        <div class="img_card w-90">
          <img
            class="img"
            :src="Product.img"
            alt="A nike shoe"
            :class="{ 'hero-img-active': activeCard !== null }"
          />
        </div>
        <p
          class="position-absolute w-75 rounded-lg bg-white text-black text-center pa-3 my-2"
          :class="{ hidden: activeCard !== null }"
        >
          {{ Product.price }}
        </p>
        <div
          class="card-details bg-white mt-2"
          :class="{ visible: activeCard !== null }"
        >
          <div
            class="d-flex flex-row justify-space-between align-center"
            v-for="(Details, index) in ProductDetails"
            :key="index"
          >
            <h2 style="width: 70%" class="text-24 my-4">{{ Details.name }}</h2>
            <p class="price text-22 fwb">N{{ Details.price }}</p>
          </div>

          <div class="select_container d-flex justify-space-between">
            <div class="w-50 my-4">
              <h4 class="text-20">Colors</h4>
              <SelectOption
                v-model="selectedColor"
                placeholder="Select Color"
                :options="colors"
              />
            </div>
            <div class="w-50 my-4">
              <h4 class="text-20">Sizes</h4>
              <SelectOption
                v-model="selectedSize"
                placeholder="Select Size"
                :options="size"
              />
            </div>
          </div>
          <div class="second_container">
            <button
              size="x-large"
              class="btn py-4 px-4 rounded-lg d-flex justify-space-between"
            >
              <i class=""> </i>
              <p class="text-18">Add to cart</p>
              <div class="position-relative">
                <p
                  class="position-absolute text-10 top-0 right-0 cart_counter translate-middle badge bg-white"
                >
                  1
                </p>
                <img :src="cart" alt="cart icon" class="cart_img" />
              </div>
            </button>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: end;
}
.header > div {
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

h1 {
  font-weight: 400;
  font-size: px;
}

.searchBar {
  border: 1px solid #eaeaea;
  border-radius: 8px;
}
.searchBar > img {
  margin-right: 16px;
}
input::placeholder {
  color: #b5b5b5;
}
.filter {
  background-color: black;
  border-radius: 8px;
  padding: 12px;
}
.header_container {
  display: flex;
  flex-direction: column;
  margin: 20px 24px;
}
ul {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  width: 100%;
  margin: 24px 0;
}
li {
  list-style: none;
  padding: 6px 24px;
  text-wrap: nowrap;
  color: #b5b5b5;
}
li:hover {
  box-shadow: 0 0 0 1px #4f35c6;
  border-radius: 8px;
  color: #4f35c6;
}

.img {
  width: 170px;
  height: 200px;
}
.card {
  border-radius: 4px;
  margin: 3px;
  display: grid;
}
.img-card {
  border-radius: 8px;
  margin: 3px;
}
.img_card{
  background: #f2e9fa;
}
.productContainer {
  display: grid;
  grid-template-columns: auto auto;
  width: 100%;
}

.single-column {
  grid-template-columns: auto;
}
.active-text {
  font-size: 45px;
}
.card-details {
  display: none;
  margin-top: 20px;
}
.hidden {
  display: none;
}
.visible {
  display: block;
  background: white;
}
.flex-col {
  display: flex;
  margin: 0 16px;
  padding: 0 !important;
  flex-direction: column !important;
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
.hero-img-active {
  width: 350px;
  height: 270px;
}
</style>

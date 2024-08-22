<template>
  <div class="header_container">
    <MenuBar />
    <div class="search_holder">
      <div class="searchBar">
        <img :src="searchIcon" alt="searchIcon" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search for a product"
          class="search"
        />
      </div>
      <button class="filter"><img :src="filter" alt="filter" /></button>
    </div>
    <div class="d-flex flex-column align-center justify-center">
      <img :src="pny" alt="pink and yellow card avatar" class="mt-16" />
      <h1 class="text-20 mt-10 font-weight-medium">Product not avaliable</h1>
    </div>
  </div>
</template>
<script>
import CartCatalogue from "@/components/CartCatalogue.vue";
import filter from "@/assets/filterICon.svg";
import searchIcon from "@/assets/searchIconGray.svg";
import MenuBar from "@/components/MenuBar.vue";
import pny from "@/assets/pinkandyellowCard.svg";
export default {
  data() {
    return {
      CartCatalogue,
      filter,
      searchIcon,
      pny,
    };
  },
  components: {
    MenuBar,
  },
};
</script>
<style scoped>
h1 {
  font-weight: 400;
  font-size: px;
}

.searchBar {
  border: 1px solid #eaeaea;
  padding: 13px;
  border-radius: 8px;
  display: flex;
  width: 80%;
  align-items: center;
}
.searchBar > img {
  margin-right: 16px;
}
input::placeholder {
  color: gray;
}
.filter {
  background-color: black;
  border-radius: 8px;
  padding: 12px;
  width: 44px;
}
.header_container {
  display: flex;
  flex-direction: column;
  margin: 20px 24px;
}

.search_holder {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
